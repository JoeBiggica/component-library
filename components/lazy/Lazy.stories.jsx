import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, object, select } from '@storybook/addon-knobs';
import { LazyImage } from './index';

const container_style = {
	padding: '100vh 0',
	background: '#f4f4f4',
};

storiesOf('component-library/lazy/LazyImage', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.add('default', () => (
		<div style={container_style}>
			<LazyImage
				style={object('style', {
					margin: '0 auto',
					width: '100vw',
					maxWidth: '380px',
				})}
				src={text('src', 'https://pictures.reuters.com/Doc/RTR/Media/TR3_UNWATERMARKED/d/e/5/1/RTS2NYXF.jpg')}
				aspect_ratio={number('aspect_ratio', 380/249)}
				alt={text('alt', 'Queen allows Johnson to suspend parliament')}
				distance={text('distance', '0px')}
			/>
		</div>
	));
