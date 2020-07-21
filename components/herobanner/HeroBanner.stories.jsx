import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import HeroBanner from './HeroBanner';

const black_bg = {
	name: 'black',
	value: '#000',
};

storiesOf('component-library/HeroBanner', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={{width: '100vw'}}>
			<HeroBanner 
				title={text('title', 'Hero Banner Title')}
				text_position={select('text_position', HeroBanner.TextPosition)}
				text_gradient={select('text_gradient', HeroBanner.TextGradient)}
				background_image={text('background_image', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/three-lions.jpg')}
				background_position={select('background_position', HeroBanner.BackgroundPosition)}
				background_gradient={select('background_gradient', HeroBanner.BackgroundGradient)}
				hero_height={select('hero_height', HeroBanner.HeroHeight)}	
			/>
		</div>
	), {
		backgrounds: [black_bg]
	});
