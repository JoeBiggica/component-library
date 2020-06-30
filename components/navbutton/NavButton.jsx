import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import PrevArrow from 'components/icons/prevarrow.svg';
import NextArrow from 'components/icons/nextarrow.svg';
import BoldPrevArrow from 'components/icons/boldprevarrow.svg';
import BoldNextArrow from 'components/icons/boldnextarrow.svg';

import styles from './NavButton.scss';


function NavButton(props) {
	const {
		className,
		children,
		hidden,
		direction,
		size,
		theme,
		onClick,
		translations
	} = props;

	const is_prev = direction === NavButton.Direction.LEFT;
	const is_next = direction === NavButton.Direction.RIGHT;

	const PrevArrowComp = (theme === NavButton.Theme.WHITE_CIRCLE) ?
		BoldPrevArrow : PrevArrow;

	const NextArrowComp = (theme === NavButton.Theme.WHITE_CIRCLE) ?
		BoldNextArrow : NextArrow;

	return (
		<CSSTransition
			timeout={250}
			in={!hidden}
			mountOnEnter
			classNames={{
				enter: styles.enter,
				enterActive: styles['enter-active'],
				enterDone: styles['enter-done'],
				exit: styles.exit,
				exitActive: styles['exit-active'],
				exitDone: styles['exit-done'],
			}}
		>
			<button
				aria-label={is_prev ? translations.previous : is_next ? translations.next : false}
				className={classnames(
					styles.button, styles[size], styles[theme], 
					is_prev && styles.prev, is_next && styles.next, 
					className
				)}
				onClick={onClick}
			>
				{is_prev && 
					<PrevArrowComp className={styles.icon} />
				}

				{is_next && 
					<NextArrowComp className={styles.icon} />
				}

				{children}
			</button>
		</CSSTransition>
	);
}

NavButton.Direction = {
	LEFT: 'left',
	RIGHT: 'right',
};

NavButton.Size = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

NavButton.Theme = {
	WHITE_BOX: 'white-box',
	VERY_DARK_BOX: 'very-dark-box',
	BLACK_BOX: 'black-box',
	WHITE_ARROW: 'white-arrow',
	WHITE_CIRCLE: 'white-circle',
};

NavButton.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	hidden: PropTypes.bool,
	size: PropTypes.oneOf(Object.values(NavButton.Size)),
	theme: PropTypes.oneOf(Object.values(NavButton.Theme)),
	direction: PropTypes.oneOf(Object.values(NavButton.Direction)).isRequired,
	onClick: PropTypes.func.isRequired,
	translations: PropTypes.shape({
		previous: PropTypes.string,
		next: PropTypes.string
	})
};

NavButton.defaultProps = {
	hidden: false,
	size: NavButton.Size.MEDIUM,
	theme: NavButton.Theme.WHITE_BOX,
	translations: {
		previous: 'Previous',
		next: 'Next'
	}
};

export default NavButton;
