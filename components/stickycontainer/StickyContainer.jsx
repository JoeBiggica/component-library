import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './StickyContainer.scss';


export default class StickyContainer extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		top_threshold: PropTypes.number,
		ignore_bottom: PropTypes.bool,
		disabled: PropTypes.bool,
		style: PropTypes.object,
		children: PropTypes.node,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		top_threshold: 0,
		ignore_bottom: false,
		disabled: false,
		onChange: () => {},
	}

	state = {
		sticky: false,
		at_bottom: false,
		content_height: 0,
	}

	constructor(props) {
		super(props);
		
		this.top_tracker_ref = React.createRef();
		this.bottom_tracker_ref = React.createRef();
		this.content_ref = React.createRef();
	}

	componentDidMount() {
		const {
			top_threshold,
			ignore_bottom,
		} = this.props;

		this.intersection_observer = new window.IntersectionObserver(entries => {
			let sticky = this.state.sticky;
			let at_bottom = this.state.at_bottom;

			entries.forEach(entry => {
				if (entry.target === this.top_tracker_ref.current) {

					sticky = entry.boundingClientRect.top < top_threshold;

				} else if (!ignore_bottom && entry.target === this.bottom_tracker_ref.current) {
					
					if (entry.isIntersecting && 
						entry.boundingClientRect.top < top_threshold) {
						sticky = true;
						at_bottom = false;
					}
					
					if (!entry.isIntersecting && 
						entry.boundingClientRect.bottom < top_threshold) {
						at_bottom = true;
						sticky = false;
					}
				}
			});

			this.setState({
				sticky,
				at_bottom,
			});
		}, {
			rootMargin: `${-top_threshold}px 0px 0px 0px`,
			threshold: [0, 1],
		});
		this.intersection_observer.observe(this.top_tracker_ref.current);
		this.intersection_observer.observe(this.bottom_tracker_ref.current);

		this.size_observer = new window.ResizeObserver(entries => {
			const entry = entries[0];
			this.setState({
				content_height: entry.target.clientHeight,
			});
		});
		this.size_observer.observe(this.content_ref.current);
	}

	componentWillUnmount() {
		this.intersection_observer.disconnect();
		this.intersection_observer = null;

		this.size_observer.disconnect();
		this.size_observer = null;
	}

	componentDidUpdate(prev_props, prev_state) {
		if (prev_state.sticky !== this.state.sticky) {
			this.props.onChange(this.state.sticky);
		}
	}

	render() {
		const {
			className,
			style,
			children,
			top_threshold,
			disabled,
		} = this.props;

		const {
			sticky,
			at_bottom,
			content_height,
		} = this.state;

		return (
			<div
				className={classnames(styles['container'], className)}
				style={style}
			>
				<div ref={this.top_tracker_ref} />

				<div
					ref={this.bottom_tracker_ref}
					style={{
						height: `calc(100% - ${content_height}px)`,
					}}
				/>

				<div
					ref={this.content_ref}
					className={classnames(
						styles['content'],
						disabled && styles['disabled'],
						sticky && styles['sticky'],
						at_bottom && styles['bottom']
					)}
					style={sticky ? {
						marginTop: `${top_threshold}px`,
					} : undefined}
				>
					{children}
				</div>
			</div>
		);
	}
}
