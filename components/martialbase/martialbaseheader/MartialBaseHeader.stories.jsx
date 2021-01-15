import React from 'react';
import { storiesOf } from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import MartialBaseHeader from './MartialBaseHeader';

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

storiesOf('component-library/martialbase/MartialBaseHeader', module)
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
		backgrounds: [white_bg]
	})
