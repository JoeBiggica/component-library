import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import ReutersLogo from './ReutersLogo';

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

storiesOf('component-library/ReutersLogo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Five rings with gray text (default)', () => (
		<ReutersLogo
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: [white_bg]
	})
	.add('Five rings with Reuters white text', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.WHITE_TEXT}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: [black_bg]
	})
	.add('Five rings with Reuters white color', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.ALL_WHITE}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}

		/>
	), {
		backgrounds: [black_bg]
	})
	.add('Five rings with Reuters black color', () => (
		<ReutersLogo
			theme={ReutersLogo.Theme.ALL_BLACK}
			title='Reuters'
			icon={boolean('icon', false)}
			style={logo_style}
		/>
	), {
		backgrounds: [white_bg]
	})
	.add('Five rings icon', () => (
		<ReutersLogo icon={boolean('icon', true)} style={logo_style} />
	), {
		backgrounds: [white_bg]
	});
