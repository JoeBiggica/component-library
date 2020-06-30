import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TextInput.scss';

const Color = {
	GRAY: 'gray',
	WHITE: 'white',
	BLACK: 'black',
	ORANGE: 'orange',
};

export default class TextInput extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		placeholder: PropTypes.string,
		name: PropTypes.string,
		color: PropTypes.oneOf(Object.values(Color)),
		auto_focus: PropTypes.bool,
		spell_check: PropTypes.bool,
		auto_correct: PropTypes.bool,
		auto_complete: PropTypes.bool,
	}

	static defaultProps = {
		color: Color.GRAY,
		auto_focus: false,
		spell_check: false,
		auto_correct: false,
		auto_complete: false,
	}

	static Color = Color;

	state = {

	}

	render() {
		const {
			className,
			style,
			placeholder,
			name,
			color,
			auto_focus,
			spell_check,
			auto_correct,
			auto_complete,
		} = this.props;

		return (
			<input
				className={classnames(styles['input'], styles[color], className)}
				style={style}
				type='text'
				placeholder={placeholder}
				name={name}
				autoFocus={auto_focus}
				spellCheck={spell_check.toString()}
				autoCorrect={auto_correct.toString()}
				autoComplete={auto_complete.toString()}
			/>
		);
	}
}
