import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, text, color, object} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import Logo from './Logo';

storiesOf('component-library/Logo', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('default', () => (
		<Logo
			url={text('url', 'https://fongshungga.com/static/fongs-circle-logo.png')}
			background_color={color('background_color', '#FFFFFF')}
			style={object('style', {
				width: '100px',
				height: '100px'
			})}
		/>
	));
