import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import SpringImage from './SpringImage';

const black_bg = {
	name: 'black',
	value: '#000',
};


storiesOf('component-library/SpringImage', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<SpringImage
			style={object('style', {
				width: '300px',
				height: '400px',
			})}
			image_url='https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/tesla/Tesla_01.jpg'
		/>
	), {
		backgrounds: [black_bg]
	})
	.add('with title', () => (
		<SpringImage
			style={object('style', {
				width: '300px',
				height: '400px',
			})}
			image_url='https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/tesla/Tesla_01.jpg'
			title='Tesla Project'
		/>
	), {
		backgrounds: [black_bg]
	});
