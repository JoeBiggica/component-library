import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, select, object } from '@storybook/addon-knobs';
import BackdropImage from './BackdropImage';


const getSrc = w => `https://s3.reutersmedia.net/resources/r/?m=02&d=20190724&t=2&i=1411634561&r=LYNXNPEF6N276&w=${w}`;
const src = getSrc(300);
const srcSet = `${getSrc(300)} 300w, ${getSrc(768)} 768w, ${getSrc(1280)} 1280w`;

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
