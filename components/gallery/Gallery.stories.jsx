import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import Gallery from './Gallery';

const black_bg = {
	name: 'black',
	value: '#000',
};


storiesOf('component-library/Gallery', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={{margin: '40px'}}>
			<Gallery
				style={object('style', {
					width: '800px'
				})}
				image_url='https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/tesla/Tesla_01.jpg'
			/>
		</div>
	), {
		backgrounds: [black_bg]
	});
