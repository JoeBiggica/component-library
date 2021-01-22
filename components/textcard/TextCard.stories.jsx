import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import TextCard from './TextCard';
import TextLabel from 'components/textlabel';

const white_bg = {
	name: 'white',
	value: '#FFF',
};

const black_bg = {
	name: 'black',
	value: '#000',
};

const body_items = [
	{
		type: 'paragraph',
		content: 'This is the text card body'
	},
	{
		type: 'paragraph',
		content: 'Another paragraph here.'
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
		<div>
			<TextCard 
				title={text('title', 'Hero Banner Title')}
				body_items={object('body_items', body_items)}
				rows={object('rows', rows)}
				font={select('font', TextLabel.Font)}
			/>
		</div>
	), {
		backgrounds: [white_bg, black_bg]
	});
