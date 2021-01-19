import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import Logo from './Logo';

const white_bg = {
	name: 'white',
	value: '#FFF',
	default: true,
};

storiesOf('component-library/Logo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('default', () => (
		<Logo
			url={text('url', 'https://fongshungga.com/static/fongs-circle-logo.png')}
			shape={select('shape', Logo.Shape)}
		/>
	), {
		backgrounds: [white_bg]
	});
