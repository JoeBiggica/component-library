import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, object, select, color } from '@storybook/addon-knobs';
import Checkmark from 'components/icons/checkmark.svg';

import TextLabel from './TextLabel';


const black_bg = {
	name: 'black',
	value: '#000000',
	default: true,
};

const example_text = 'Sri Lanka police chief refuses to quit';


storiesOf('component-library/TextLabel', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('render plain text', () => {
		return (
			<TextLabel
				text={text('text', example_text)}
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
	})
	.add('font options', () => {
		return (
			<TextLabel
				font={select('font', TextLabel.Font)}
				text={example_text}
			/>
		);
	})
	.add('color options', () => {
		return (
			<TextLabel
				color={select('color', TextLabel.Color)}
				text={example_text}
			/>
		);
	})
	.add('custom CSS color', () => {
		return (
			<TextLabel
				color={color('color', '#FF1493')}
				text={example_text}
			/>
		);
	});
