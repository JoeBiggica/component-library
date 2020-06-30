import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import findIndex from 'lodash/findIndex';
import isNumber from 'lodash/isNumber';

import styles from './Accordion.scss';


export default class Accordion extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		items: PropTypes.array,
		initial_active_index: PropTypes.number,
		transition_duration: PropTypes.string,
		collapse_others: PropTypes.bool,
		renderHeader: PropTypes.func.isRequired,
		renderBody: PropTypes.func.isRequired,
	}

	static defaultProps = {
		items: [],
		transition_duration: '400ms',
		collapse_others: false,
	}

	constructor(props) {
		super(props);
		
		const initial_active_index = props.initial_active_index;

		const initial_active_indices = [];
		if (isNumber(initial_active_index)) {
			initial_active_indices.push(initial_active_index);
		}

		const initial_body_heights = props.items.map((item, index) => {
			return initial_active_index === index ? 'auto' : '0';
		});

		this.state = {
			active_indices: initial_active_indices,
			body_heights: initial_body_heights,
		};
	}

	componentDidMount() {
		this.body_size_observer = new window.ResizeObserver(this.updateActiveBodyHeights);

		this.props.items.forEach((item, index) => {
			const ref = this.getBodyRef(index);
			this.body_size_observer.observe(ref.current);
		});
	}

	componentWillUnmount() {
		this.body_size_observer.disconnect();
	}

	getBodyRef = (() => {
		const refs = [];

		return function (index) {
			if (!refs[index]) {
				refs[index] = React.createRef();
			}
			return refs[index];
		};
	})()

	getBodyHeight = index => {
		const ref = this.getBodyRef(index);

		if (ref) {
			return ref.current.offsetHeight;
		}

		return 0;
	}

	isActiveIndex = index => {
		return this.state.active_indices.indexOf(index) > -1;
	}

	updateActiveBodyHeights = () => {
		const body_heights = this.state.body_heights.map((height, i) => {
			if (this.isActiveIndex(i)) {
				const body_height = this.getBodyHeight(i);
				return `${body_height}px`;
			}

			return this.props.collapse_others ? 0 : height; 
		});

		this.setState({
			body_heights,
		});
	}

	handleClickHeader = index => {
		const will_collapse = this.isActiveIndex(index);

		let active_indices;
		let body_heights;

		if (will_collapse) {

			body_heights = this.state.body_heights.map((height, i) => {
				if (i === index) {
					return 0;
				}
				return height; 
			});

			active_indices = this.state.active_indices.filter(i => i !== index);

		} else {

			body_heights = this.state.body_heights.map((height, i) => {
				if (i === index) {
					const body_height = this.getBodyHeight(index);
					return `${body_height}px`;
				}

				return this.props.collapse_others ? 0 : height; 
			});

			active_indices = this.props.collapse_others ? [index] : 
				this.state.active_indices.concat(index);
		}

		this.setState({
			active_indices,
			body_heights,
		});
	}

	renderItem = (item, index) => {
		const active = this.isActiveIndex(index);

		const body_style = {
			transitionDuration: this.props.transition_duration,
			height: this.state.body_heights[index],
		};

		return (
			<li key={index}>
				<div
					className={styles['header']}
					onClick={this.handleClickHeader.bind(this, index)}
				>
					{this.props.renderHeader(item, index, active)}
				</div>

				<div
					className={styles['body']}
					style={body_style}
				>
					<div ref={this.getBodyRef(index)}>
						{this.props.renderBody(item, index, active)}
					</div>
				</div>
			</li>
		);
	}

	render() {
		const {
			className,
			style,
			items,
		} = this.props;

		return (
			<ul
				className={classnames(styles['container'], className)}
				style={style}
			>
				{items.map(this.renderItem)}
			</ul>
		);
	}
}
