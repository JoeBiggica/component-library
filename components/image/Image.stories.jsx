import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, select, object, boolean } from '@storybook/addon-knobs';
import Image from './Image';
// import { importContentOfCssFile } from './../../.storybook/helpers';

// const image_css_url = '../../lib/image/Image.css';

const placeholder_options = {
	...Image.Placeholder,
	'false': false,
};

const styles = {

}

storiesOf('component-library/Image', module)
	.addDecorator(centered)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.add('default', () => (
		<Image
			style={object('style', {
				width: '100vw',
				maxWidth: '380px',
			})}
			src={text('src', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg')}
			aspect_ratio={number('aspect_ratio', 380/249)}
			alt={text('alt', 'Picture from the Wong Fei Hung Museum')}
		/>
	))
	.add('fill mode and placeholder', () => (
		<Image
			style={object('style', {
				width: '500px',
				height: '250px',
			})}
			fill_mode={select('fill_mode', Image.FillMode, Image.FillMode.FIT)}
			placeholder={select('placeholder', placeholder_options, Image.Placeholder.LOGO_LIGHT)}
			src={text('src', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg')}
			alt={text('alt', 'Picture from the Wong Fei Hung Museum')}
		/>
	));