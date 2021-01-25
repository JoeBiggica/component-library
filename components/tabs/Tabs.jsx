import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';
import ScrollList from 'components/scrolllist';

import styles from './Tabs.scss';


class Tabs extends PureComponent {

	static propTypes = {
		initial_index: PropTypes.number,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		),
		className: PropTypes.string,
		button_className: PropTypes.string,
		style: PropTypes.object,
		font: PropTypes.string,
		current_color: PropTypes.string,
		track_position: PropTypes.string,
		triangle_marker: PropTypes.bool,
		onClick: PropTypes.func,
	}

	static defaultProps = {
		initial_index: 0,
		font: 'MEDIUM',
		current_color: 'ORANGE',
		track_position: 'bottom',
		onClick: () => {},
	}

	constructor(props) {
		super(props);
		
		this.state = {
			current_index: props.initial_index,
			use_transition: false,
			indicator_x: 0,
			indicator_w: 0,
		};

		this.item_refs = [];
	}

	componentDidMount() {
		this.handleAfterTabChange(this.state.current_index);
	}

	componentDidUpdate(prev_props, prev_state) {
		if (prev_state.current_index !== this.state.current_index) {
			this.handleAfterTabChange(this.state.current_index, true);
		}
	}

	handleAfterTabChange = (index, use_transition = false) => {
		const ref = this.item_refs[index];
		if (ref) {
			this.setState({
				use_transition,
				indicator_x: ref.offsetLeft,
				indicator_w: ref.offsetWidth,
			});	
		}
	}

	handleClickTab = (item, index) => {
		this.setState({
			current_index: index,
		});

		this.props.onClick(item, index);
	}

	renderItem = (item, i, current) => {
		const color = current ? TextLabel.Color[this.props.current_color] : TextLabel.Color.GREY;
		const ariaLabel = `tab-${i}`;

		return (
			<button
				aria-labelledby={ariaLabel}
				key={`tab-${i}`}
				ref={ref => this.item_refs[i] = ref}
				className={classnames(styles.button, this.props.button_className)}
				disabled={current}
				onClick={this.handleClickTab.bind(this, item, i)}
			>
				<TextLabel
					className={styles.name}
					color={color}
					font={TextLabel.Font[this.props.font]}
					id={ariaLabel}
					text={item.name}
				/>
			</button>
		);
	}

	render() {
		const {
			className,
			style,
			items,
			track_position,
			triangle_marker,
		} = this.props;

		const {
			current_index,
			use_transition,
		} = this.state;

		const indicator_style = {
			width: this.state.indicator_w,
			transform: `translateX(${this.state.indicator_x}px)`,
		};

		const indicator_classnames = classnames(
			styles.indicator,
			use_transition && styles.transition,
			track_position === 'bottom' && styles.bottom,
			track_position === 'top' && styles.top,
			triangle_marker && styles.triangle,
		);

		const track_classnames = classnames(
			styles.track,
			track_position === 'bottom' && styles.bottom,
			track_position === 'top' && styles.top,
		);

		return (
			<nav
				className={classnames(styles.container, className)}
				style={style}
			>
				<ScrollList
					className={styles.list}
					item_className={styles['list-item']}
					items={items}
					current_item_index={current_index}
					button_theme={ScrollList.ButtonTheme.WHITE_CIRCLE}
					prev_button_className={styles.prev}
					next_button_className={styles.next}
					renderItem={this.renderItem}
				>
					<div
						className={indicator_classnames}
						style={indicator_style}
					/>
				</ScrollList>

				<div className={track_classnames} />
			</nav>
		);
	}
}

export default Tabs;
