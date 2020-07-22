import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import Gallery from './Gallery';

const black_bg = {
	name: 'black',
	value: '#000',
};

const images = [
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01-small.png"
	},
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02-small.png"
	},
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03-small.png"
	},
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01-small.png"
	},
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02-small.png"
	},
	{
		"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03.png",
		"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03-small.png"
	},
];

storiesOf('component-library/Gallery', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={{margin: '40px'}}>
			<Gallery
				style={object('style', {
					width: '100%'
				})}
				images={images}
			/>
		</div>
	), {
		backgrounds: [black_bg]
	});
