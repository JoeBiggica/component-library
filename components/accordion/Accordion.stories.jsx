import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import Accordion from './Accordion';


const style = {
	width: '600px',
};

const items = [
	{
		title: 'Red',
		color: 'red',
	},
	{
		title: 'Blue',
		color: 'blue',
	},
	{
		title: 'Green',
		color: 'green',
	},
];

const renderHeader = (item, index, active) => {
	return (
		<div style={{
			color: item.color,
			padding: '10px',
			border: `1px solid ${item.color}`,
		}}
		>
			{`${item.title}, active: ${active}`}
		</div>
	);
};

const renderBody = item => {
	return (
		<div style={{
			height: '200px',
			background: item.color,
		}}
		/>
	);
};

storiesOf('component-library/Accordion', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Accordion
			style={style}
			items={items}
			renderHeader={renderHeader}
			renderBody={renderBody}
		/>
	))
	.add('initial active index', () => (
		<Accordion
			style={style}
			items={items}
			renderHeader={renderHeader}
			renderBody={renderBody}
			initial_active_index={number('initial_active_index', 0)}
		/>
	))
	.add('collapse others', () => (
		<Accordion
			style={style}
			items={items}
			renderHeader={renderHeader}
			renderBody={renderBody}
			collapse_others={boolean('collapse_others', true)}
		/>
	))
	.add('transition duration', () => (
		<Accordion
			style={style}
			items={items}
			renderHeader={renderHeader}
			renderBody={renderBody}
			transition_duration={text('transition_duration', '200ms')}
		/>
	));
