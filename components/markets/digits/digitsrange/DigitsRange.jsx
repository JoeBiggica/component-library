import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Digits from 'components/markets/digits';
import TextLabel from 'components/textlabel';

import styles from './DigitsRange.scss';

function DigitsRange(props) {
	const {
		className, 
		values, 
		fixed_decimals, 
		change_color, 
		unit, 
		wrapper, 
		separator, 
		color, 
		font
	} = props;

	const format_props = {
		fixed_decimals,
		change_color,
		unit,
		wrapper,
		color,
		font,
	};

	return (
		<div className={classnames(styles['container'], className)}>
			<Digits
				className={styles['digits']}
				value={values[0]}
				{...format_props}
			/>
			<TextLabel
				className={styles['separator']}
				text={separator}
				font={font}
				color={color}
			/>
			<Digits
				className={styles['digits']}
				value={values[1]}
				{...format_props}
			/>
		</div>
	);
}

DigitsRange.Color = Digits.Color;
DigitsRange.Font = Digits.Font;

DigitsRange.propTypes = {
	className: PropTypes.string,
	values: PropTypes.array.isRequired,
	fixed_decimals: PropTypes.number,
	change_color: PropTypes.bool,
	unit: PropTypes.string,
	wrapper: PropTypes.string,
	separator: PropTypes.string,
	color: PropTypes.string,
	font: PropTypes.string,
};

DigitsRange.defaultProps = {
	separator: ' - ',
};

export default DigitsRange;
