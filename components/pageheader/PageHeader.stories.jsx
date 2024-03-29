import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import PageHeader from './PageHeader';

storiesOf('component-library/PageHeader', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<div style={{ width: '500px', margin: '0 auto' }}>
				<PageHeader
					title={text('title', 'Page Header Title')}
					font_color={color('font_color', 'black')}
					background={boolean('background', false)}
					background_color={color('background_color', 'blue')}
					background_skew={boolean('background_skew', false)}
					underline={boolean('underline', false)}
					underline_color={color('underline_color', 'red')}
				/>
			</div>
		);
	});
