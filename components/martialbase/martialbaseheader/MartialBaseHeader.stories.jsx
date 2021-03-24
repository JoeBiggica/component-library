import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import MartialBaseHeader from './MartialBaseHeader';

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

storiesOf('MartialBase/MartialBaseHeader', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('default', () => (
		<MartialBaseHeader
			gradient
			show_logo_text={boolean('show_logo_text', false)}
			position={MartialBaseHeader.Position.ABSOLUTE}
			nav_alignment={MartialBaseHeader.NavAlignment.RIGHT}
		/>
	), {
		backgrounds: {
			default: 'white',
			values: bg_values
		}
	})
