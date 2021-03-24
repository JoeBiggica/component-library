import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, object, select, color } from '@storybook/addon-knobs';
import Checkmark from 'components/icons/checkmark.svg';

import TextLabel from './TextLabel';

const example_text = 'This is the TextLabel text.';

storiesOf('component-library/TextLabel', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<TextLabel
				text={text('text', example_text)}
				font={select('font', TextLabel.Font)}
				color={select('color', TextLabel.Color)}
			/>
		);
	})
	.add('custom CSS color', () => {
		return (
			<TextLabel
				text={text('text', example_text)}
				font={select('font', TextLabel.Font)}
				text={example_text}
			/>
		);
	})
	.add('render node array as children', () => {
		const text = [
			<Checkmark
				key='icon'
				style={{
					marginRight: '6px',
					height: '9px',
					verticalAlign: 'middle',
				}}
			/>,
			'Newsletter Subscribed',
		];

		return (
			<TextLabel
				text={text}
				color={TextLabel.Color.BLUE}
			/>
		);
	})
	.add('custom tag name', () => {
		return (
			<TextLabel
				tag={text('tag', 'span')}
				text={example_text}
			/>
		);
	})
	.add('custom style', () => {
		return (
			<TextLabel
				style={object('style', {
					fontSize: '20px',
				})}
				text={example_text}
			/>
		);
	})
	.add('turn into anchor tag when use href', () => {
		return (
			<TextLabel
				href={text('href', 'https://www.reuters.com/')}
				target={text('target', '_blank')}
				text={example_text}
			/>
		);
	});
