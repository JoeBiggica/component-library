import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import GoogleMap from './GoogleMap';

const white_bg = {
	name: 'white',
	value: '#FFF',
};

const black_bg = {
	name: 'black',
	value: '#000',
};

storiesOf('component-library/GoogleMap', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={object('style', {maxWidth: '500px'})}>
			<GoogleMap 
				title={text('title', 'Contact Title')}
			/>
		</div>
	), {
		backgrounds: [white_bg, black_bg]
	});
