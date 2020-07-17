import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, select, object } from '@storybook/addon-knobs';
import BackdropImage from './BackdropImage';

const src = 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg';
const srcSet = `${src} 300w, ${src} 768w, ${src} 1280w`;

const placeholder_options = {
	...BackdropImage.Placeholder,
	'false': false,
};

storiesOf('component-library/BackdropImage', module)
	.addDecorator(centered)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.add('default', () => (
		<BackdropImage
			style={object('style', {
				width: '100vw',
				height: '100vh',
			})}
			src={text('src', src)}
			srcSet={text('srcSet', srcSet)}
			placeholder={select('placeholder', placeholder_options, BackdropImage.Placeholder.LOGO_LIGHT)}
		/>
	))
	.add('aspect ratio, fill mode and position', () => (
		<BackdropImage
			style={object('style', {
				width: '100vw',
				maxWidth: '640px',
			})}
			src={text('src', src)}
			srcSet={text('srcSet', srcSet)}
			aspect_ratio={number('aspect_ratio', 1.75)}
			fill_mode={select('fill_mode', BackdropImage.FillMode, BackdropImage.FillMode.FIT)}
			fill_position={select('fill_position', BackdropImage.FillPosition, BackdropImage.FillPosition.TOP_CENTER)}
			placeholder={BackdropImage.Placeholder.LOGO_DARK}
		/>
	));
