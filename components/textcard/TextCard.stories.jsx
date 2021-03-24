import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import TextCard from './TextCard';
import TextLabel from 'components/textlabel';

const body_items = [
	{
		type: 'paragraph',
		content: 'This is the text card body This is the text card body This is the text card body This is the text card body This is the text card body This is the text card body This is the text card body.'
	},
	{
		type: 'paragraph',
		content: 'Another paragraph here. Another paragraph here. Another paragraph here. Another paragraph here. Another paragraph here. Another paragraph here. Another paragraph here.'
	}
];

const rows = [
	{
		name: 'Discipline',
		value: 'Kung Fu'
	},
	{
		name: 'Style',
		value: 'Hung Ga'
	},
	{
		name: 'System',
		value: 'Fong\'s Hung Ga'
	},
	{
		name: 'Instructor',
		value: 'Bill Fong'
	}
];

storiesOf('component-library/TextCard', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={object('style', {maxWidth: '500px'})}>
			<TextCard 
				title={text('title', 'Text Title')}
				body_items={object('body_items', body_items)}
				rows={object('rows', rows)}
				font={select('font', TextLabel.Font)}
			/>
		</div>
	));
