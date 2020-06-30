import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import styles from './TextLabel.scss';

const Color = {
	GRAY: 'gray',
	WHITE: 'white',
	BLACK: 'black',
	ORANGE: 'orange',
	BLUE: 'blue',
	GRAY_TO_BLACK: 'gray-to-black',
	GRAY_TO_ORANGE: 'gray-to-orange',
	WHITE_TO_ORANGE: 'white-to-orange',
	BLACK_TO_ORANGE: 'black-to-orange',
	BLUE_TO_ORANGE: 'blue-to-orange'
};

const Font = {
	LIGHT: 'light',
	LIGHT_ALL_CAPS: 'light-all-caps',
	LIGHT_ALL_CAPS_NO_SPACING: 'light-all-caps-no-spacing',
	SMALL_ALL_CAPS: 'small-all-caps',
	SMALL_ALL_CAPS_NO_SPACING: 'small-all-caps-no-spacing',
	SMALL_ALL_CAPS_SPACED_OUT: 'small-all-caps-spaced-out',
	REGULAR: 'regular',
	MEDIUM: 'medium',
	BOLD: 'bold',
	SERIF: 'serif',
	SERIF_SEMI_BOLD: 'serif-semi-bold'
};

const color_values = Object.values(Color);
const font_values = Object.values(Font);

function TextLabel(props) {
	const {
		className,
		style,
		text,
		font,
		color,
		tag,
		href,
		handleClick
	} = props;

	const use_custom_color = color_values.indexOf(color) < 0;
	const color_className = !use_custom_color && color;

	const composed_className = classnames(
		styles['text-label'],
		styles[color_className],
		styles[font],
		className,
	);

	const composed_style = Object.assign({}, use_custom_color && {
		color
	}, style);

	const Tag = href ? 'a' : tag;

	const dom_props = omit(props, [
		'text',
		'color',
		'font',
		'tag',
		'handleClick'
	]);

	return (
		<Tag
			{...dom_props}
			className={composed_className}
			style={composed_style}
			onClick={handleClick}
		>
			{text}
		</Tag>
	);
}

TextLabel.Color = Color;
TextLabel.Font = Font;

TextLabel.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.array
	]),
	color: PropTypes.string,
	font: PropTypes.oneOf(font_values),
	tag: PropTypes.string,
	href: PropTypes.string,
	handleClick: PropTypes.func
};

TextLabel.defaultProps = {
	color: Color.GRAY,
	font: Font.SMALL_ALL_CAPS,
	tag: 'p',
	handleClick: () => {}
};

export default TextLabel;
