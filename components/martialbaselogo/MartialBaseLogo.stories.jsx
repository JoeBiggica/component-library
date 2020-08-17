import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import MartialBaseLogo from './MartialBaseLogo';

const white_bg = {
	name: 'white',
	value: '#FFF',
	default: true,
};

const black_bg = {
	name: 'black',
	value: '#000',
	default: true,
};

const rangoon_green_bg = {
	name: 'rangoon green',
	value: '#1A1A1A',
	default: true,
};

const logo_style = {
	width: '350px',
};

storiesOf('component-library/MartialBaseLogo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('White', () => (
		<MartialBaseLogo
			theme={MartialBaseLogo.Theme.WHITE}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: [black_bg]
	})
	.add('Black', () => (
		<MartialBaseLogo
			theme={MartialBaseLogo.Theme.BLACK}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: [white_bg]
	});