import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import NavButton from 'components/navbutton';

import styles from './ScrollList.scss';


const alignment = {
	LEFT: 'left',
	RIGHT: 'right',
	CENTER: 'center',
};

class ScrollList extends PureComponent {

	static Alignment = alignment

	static ButtonTheme = NavButton.Theme

	static propTypes = {
		items: PropTypes.array.isRequired,
		renderItem: PropTypes.func.isRequired,
		children: PropTypes.node,
		className: PropTypes.string,
		item_className: PropTypes.string,
		alignment: PropTypes.oneOf(Object.values(alignment)),
		current_item_index: PropTypes.number,
		button_theme: PropTypes.string,
		button_size: PropTypes.string,
		prev_button_className: PropTypes.string,
		next_button_className: PropTypes.string,
	}

	static defaultProps = {
		alignment: alignment.LEFT,
		current_item_index: -1,
	}

	constructor(props) {
		super(props);
		
		this.state = {
			reached_left_bound: true,
			reached_right_bound: true,
		};

		this.scroller_ref = React.createRef();
		this.item_refs = [];

		this.debouncedHandleScroll = debounce(this.handleScroll, 100, {
			leading: false,
			trailing: true,
		});
	}

	componentDidMount() {
		this.resize_observer = new window.ResizeObserver(this.debouncedHandleScroll);
		this.resize_observer.observe(this.scroller_ref.current);
	}

	componentWillUnmount() {
		this.debouncedHandleScroll.cancel();
		this.resize_observer.disconnect();
	}

	componentDidUpdate(prev_props) {
		if (prev_props.current_item_index !== this.props.current_item_index) {
			const item_ref = this.item_refs[this.props.current_item_index];
			if (item_ref) {
				this.scrollIntoView(item_ref);
			}
		}
	}

	supportSmoothScroll = () => {
		return 'scrollBehavior' in document.documentElement.style;
	}

	scrollIntoView = item_ref => {
		if (this.supportSmoothScroll()) {
			item_ref.scrollIntoView({
				inline: 'center',
				block: 'nearest',
				behavior: 'smooth',
			});
		} else {
			const scroller = this.scroller_ref.current;
			if (window.scrollTo()) {
				scroller.scrollTo(item_ref.offsetLeft - scroller.clientWidth / 2 + item_ref.clientWidth / 2, 0);
			}
		}
	}

	scrollBy = amount => {
		const scroller = this.scroller_ref.current;
		if (this.supportSmoothScroll()) {
			scroller.scrollBy({
				top: 0,
				left: amount,
				behavior: 'smooth',
			});
		} else {
			scroller.scrollLeft += amount;
		}
	}

	getStepDistance = () => {
		const item_width = this.scroller_ref.current.scrollWidth / this.props.items.length;
		const half_scroller_width = this.scroller_ref.current.clientWidth / 2;
		return Math.max(item_width, half_scroller_width);
	}

	nextStep = () => {
		this.scrollBy(this.getStepDistance());
	}

	prevStep = () => {
		this.scrollBy(-this.getStepDistance());
	}

	handleScroll = () => {
		const scroller = this.scroller_ref.current;
		const pos = scroller.scrollLeft;
		const left_bound = 0;
		const right_bound = scroller.scrollWidth - scroller.clientWidth;
		const reached_left_bound = pos <= left_bound;
		const reached_right_bound = pos >= right_bound;

		this.setState({
			reached_left_bound,
			reached_right_bound,
		});
	}

	renderItem = (item, index) => {
		const current = index === this.props.current_item_index;

		return (
			<li
				key={`item-${index}`}
				className={this.props.item_className}
				ref={ref => this.item_refs[index] = ref}
			>
				{this.props.renderItem(item, index, current)}
			</li>
		);
	}

	render() {
		const {
			className,
			prev_button_className,
			next_button_className,
			button_theme,
			button_size,
			alignment,
			items,
			children,
		} = this.props;

		const {
			reached_left_bound,
			reached_right_bound,
		} = this.state;

		return (
			<div className={className}>
				<div className={styles['container']}>
					<NavButton
						className={classnames(styles['prev-button'], prev_button_className)}
						direction={NavButton.Direction.LEFT}
						theme={button_theme}
						size={button_size}
						hidden={reached_left_bound}
						onClick={this.prevStep}
					/>
					<NavButton
						className={classnames(styles['next-button'], next_button_className)}
						direction={NavButton.Direction.RIGHT}
						theme={button_theme}
						size={button_size}
						hidden={reached_right_bound}
						onClick={this.nextStep}
					/>
					<div
						className={classnames(styles['scroller'], styles[alignment])}
						ref={this.scroller_ref}
						onScroll={this.debouncedHandleScroll}
					>
						<ul>
							{items.map(this.renderItem)}
							{children}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ScrollList;
