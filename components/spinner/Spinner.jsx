import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import CSSTransition from 'react-transition-group/CSSTransition';
import TextLabel from 'components/textlabel';

import styles from './Spinner.scss';

const Color = {
	WHITE: 'white',
	ORANGE: 'orange',
};

export default class Spinner extends PureComponent {

	static propTypes = {
		show: PropTypes.bool,
		className: PropTypes.string,
		text_className: PropTypes.string,
		style: PropTypes.object,
		text_style: PropTypes.object,
		color: PropTypes.oneOf(Object.values(Color)),
		text: PropTypes.string,
	}

	static defaultProps = {
		show: true,
		color: Color.ORANGE,
	}

	static getDerivedStateFromProps(props, state) {
		if (!props.show) {
			return {
				transition_in: false,
			};
		}

		return null;
	}

	static Color = Color;

	constructor(props) {
		super(props);
		
		this.state = {
			transition_in: false,
		};

		const wait = 100;

		this.deferred_show = debounce(() => {
			this.setState({
				transition_in: true,
			});
		}, wait);
	}

	componentDidMount() {
		if (this.props.show) {
			this.deferred_show();
		}
	}

	componentDidUpdate(prev_props) {
		if (prev_props.show !== this.props.show) {
			if (this.props.show) {
				this.deferred_show();
			} else {
				this.deferred_show.cancel();
			}
		}
	}

	componentWillUnmount() {
		this.deferred_show.cancel();
	}

	render() {
		const {
			className,
			text_className,
			style,
			text_style,
			color,
			text,
		} = this.props;

		return (
			<CSSTransition
				timeout={500}
				in={this.state.transition_in}
				mountOnEnter
				unmountOnExit
				classNames={{
					appear: styles['appear'],
					appearActive: styles['appear-active'],
					enter: styles['enter'],
					enterActive: styles['enter-active'],
					enterDone: styles['enter-done'],
					exit: styles['exit'],
					exitActive: styles['exit-active'],
					exitDone: styles['exit-done'],
				}}
			>
				<div
					className={classnames(styles['container'], className)}
					style={style}
				>
					<div className={styles['icon-container']}>
						<svg
							className={classnames(styles['icon'], styles[color])}
							preserveAspectRatio='xMidYMid'
							viewBox='0 0 100 100'
						>
							<circle cx='50' cy='50' r='40' />
						</svg>
					</div>
					{text && 
						<TextLabel
							className={classnames(styles['text'], text_className)}
							style={text_style}
							text={text}
							font={TextLabel.Font.REGULAR}
							color={color === Color.WHITE ? TextLabel.Color.WHITE : TextLabel.Color.GRAY}
							tag='span'
						/>
					}
				</div>
			</CSSTransition>
		);
	}
}
