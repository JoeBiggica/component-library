import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import MartialBaseLogo from './MartialBaseLogo';

const logo_style = {
	width: '350px',
};

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

storiesOf('MartialBase/MartialBaseLogo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('White', () => (
		<MartialBaseLogo
			theme={MartialBaseLogo.Theme.WHITE}
			title='Reuters'
			show_text={boolean('text', false)}
			style={logo_style}
		/>
	), {
		backgrounds: {
			default: 'black',
			values: bg_values
		}
	})
	.add('Black', () => (
		<MartialBaseLogo
			theme={MartialBaseLogo.Theme.BLACK}
			title='Reuters'
			show_text={boolean('text', false)}
			style={logo_style}
		/>
	), {
		backgrounds: {
			default: 'white',
			values: bg_values
		}
	});
