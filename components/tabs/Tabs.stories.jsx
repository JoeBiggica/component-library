import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Tabs from './Tabs';

const items = [
	{
		name: 'Batman',
	},
	{
		name: 'Superman',
	},
	{
		name: 'Wonder Woman',
	},
	{
		name: 'Aquaman',
	},
	{
		name: 'Flash',
	},
	{
		name: 'Martian Manhunter',
	},
	{
		name: 'Green Arrow',
	},
	{
		name: 'Cyborg',
	},
];

const style = {
	width: '100vw',
	height: '35px',
};

storiesOf('component-library/Tabs', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Tabs
			style={style}
			items={items}
		/>
	))
	.add('initial index', () => (
		<Tabs
			style={style}
			initial_index={number('initial_index', 1)}
			items={items}
		/>
	));
