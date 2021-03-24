import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import GoogleMap from './GoogleMap';

const controls = {
	zoom: false,
	map_type: false,
	scale: false,
	street_view: false,
	rotate: false,
	fullscreen: false
};

storiesOf('component-library/GoogleMap', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={{ width: '400px', height: '400px' }}>
			<GoogleMap
				height={text('height', '400px')}
				address={text('address', '3 Times Square, New York NY')}
				map_style={select('map_style', GoogleMap.MapStyle)}
				controls={object('controls', controls)}
			/>
		</div>
	));
