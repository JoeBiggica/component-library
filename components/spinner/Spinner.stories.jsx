import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import Spinner from './Spinner';

const spinner_only_style = {
	width: '30px',
	height: '30px',
	outline: '1px solid lightgrey',
};

const spinner_and_text_style = {
	width: '30px',
	outline: '1px solid lightgrey',
};

storiesOf('component-library/Spinner', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Spinner
			style={object('style', spinner_only_style)}
			color={select('color', Spinner.Color, Spinner.Color.ORANGE)}
			show={boolean('show', true)}
		/>
	))
	.add('with text', () => (
		<Spinner
			style={object('style', spinner_and_text_style)}
			color={select('color', Spinner.Color, Spinner.Color.ORANGE)}
			show={boolean('show', true)}
			text={text('text', 'Loading...')}
		/>
	));
