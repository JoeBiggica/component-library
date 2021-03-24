import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import ReutersLogo from './ReutersLogo';

const bg_values = [
	{
		name: 'black', 
		value: '#000'
	},
	{
		name: 'white', 
		value: '#fff'
	}
];

const logo_style = {
	width: '350px',
};

storiesOf('component-library/reuters/ReutersLogo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Five rings with grey text (default)', () => (
		<ReutersLogo
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: {
			default: 'white',
			values: bg_values
		}
	})
	.add('Five rings with Reuters white text', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.WHITE_TEXT}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: {
			default: 'black',
			values: bg_values
		}
	})
	.add('Five rings with Reuters white color', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.ALL_WHITE}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}

		/>
	), {
		backgrounds: {
			default: 'black',
			values: bg_values
		}
	})
	.add('Five rings with Reuters black color', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.ALL_BLACK}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: {
			default: 'white',
			values: bg_values
		}
	})
	.add('Five rings icon', () => (
		<ReutersLogo icon={boolean('icon', true)} style={logo_style} />
	), {
		backgrounds: {
			default: 'white',
			values: bg_values
		}
	});
