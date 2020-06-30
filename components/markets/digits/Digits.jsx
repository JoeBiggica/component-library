import React from 'react';
import PropTypes from 'prop-types';
import TextLabel from 'components/textlabel';
import classnames from 'classnames';

import styles from './Digits.scss';

function Digits(props) {

	const {
		className,
		value,
		type,
		fixed_decimals,
		change_color,
		unit,
		plus_sign,
		wrapper,
		color,
		font,
		factor,
		tag,
	} = props;

	let number_value = Number(value);
	const is_nan = isNaN(value) || value === null;

	// WIP: IS BE A BETTER PLACE TO HANDLE NUMBER VALIDATION
	const is_invalid = Math.abs(number_value) === 99999.99000;

	// Format number as a factor of [factor] value
	if (factor) {
		number_value /= factor;
	}

	// Number string formatting
	let number_string = number_value;
	// Format number based on decimals and locale
	number_string = number_value.toLocaleString(undefined, {
		minimumFractionDigits: fixed_decimals, 
		maximumFractionDigits: fixed_decimals,
	});
	// Add plus sign
	if (plus_sign && number_value > 0) {
		number_string = '+'+number_string;
	}
	// Append unit
	if (unit) {
		number_string = `${number_string}${unit}`;
	}
	// Append factor
	if (factor) {
		number_string = `${number_string}${getSIUnit(factor)}`;
	}

	// Handle NaN and invalid values
	number_string = (is_nan || is_invalid) ? '--' : number_string;

	// Prepend/Append wrappers
	number_string = wrapper ? `${wrapper.start}${number_string}${wrapper.end}` : number_string;

	// Format based on type
	if (type === 'accounting') {
		number_string = number_value < 0 ? `(${number_string.replace('-', '')})` : number_string;
	}

	const composed_className = classnames(
		styles['digits'],
		styles[change_color && value > 0.000000 && 'green'],
		styles[change_color && value < 0.000000 && 'red'],
		className
	);
	
	return (
		<TextLabel
			className={composed_className}
			text={number_string}
			font={font}
			color={color}
			tag={tag}
		/>
	);
}

const getSIUnit = factor => {
	switch (factor) {
		case 100:
			return 'h';
		case 1000:
			return 'K';
		case 1000000:
			return 'M';
		case 1000000000:
			return 'B';
		case 1000000000000:
			return 'T';
		default:
			return '';
	}
};

Digits.Color = TextLabel.Color;
Digits.Font = TextLabel.Font;

Digits.propTypes = {
	className: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	type: PropTypes.string,
	fixed_decimals: PropTypes.number,
	change_color: PropTypes.bool,
	plus_sign: PropTypes.bool,
	unit: PropTypes.string,
	wrapper: PropTypes.object,
	color: PropTypes.string,
	font: PropTypes.string,
	factor: PropTypes.number,
	tag: PropTypes.string,
};

Digits.defaultProps = {
	font: TextLabel.Font.REGULAR,
	tag: 'span',
};

export default Digits;
