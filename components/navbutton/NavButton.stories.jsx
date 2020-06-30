import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import NavButton from './NavButton';


const backgrounds = [{
	name: 'light gray',
	value: '#F0F0F0',
	default: true,
}, {
	name: 'black',
	value: '#000',
}];

storiesOf('component-library/NavButton', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('default with direction', () => (
		<NavButton
			direction={select('direction', NavButton.Direction, NavButton.Direction.LEFT)}
		/>
	), {
		backgrounds
	})
	.add('size options', () => (
		<NavButton
			direction={select('direction', NavButton.Direction, NavButton.Direction.LEFT)}
			size={select('size', NavButton.Size, NavButton.Size.MEDIUM)}
		/>
	), {
		backgrounds
	})
	.add('theme options', () => (
		<NavButton
			direction={select('direction', NavButton.Direction, NavButton.Direction.LEFT)}
			size={select('size', NavButton.Size, NavButton.Size.MEDIUM)}
			theme={select('theme', NavButton.Theme, NavButton.Theme.WHITE_BOX)}
		/>
	), {
		backgrounds
	});
