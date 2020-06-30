import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import StickyContainer from './StickyContainer';


storiesOf('component-library/StickyContainer', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<StickyContainer style={{
			margin: '300px auto 1000px auto',
			width: '300px',
			height: '600px',
			background: 'gainsboro',
		}}
		>
			<div style={{
				background: 'green',
				width: '300px',
				height: '250px',
			}} />
		</StickyContainer>
	))
	.add('adapt to changing sticky or content height', () => (
		<StickyContainer style={{
			margin: '300px auto 1000px auto',
			width: '300px',
			height: text('container height', '1200px'),
			background: 'gainsboro',
		}}
		>
			<div style={{
				background: 'green',
				width: '300px',
				height: text('content height', '250px'),
			}}
			/>
		</StickyContainer>
	))
	.add('ignore bottom', () => (
		<StickyContainer
			ignore_bottom={boolean('ignore_bottom', true)}
			style={{
				margin: '300px auto 1000px auto',
				width: '300px',
				height: '600px',
				background: 'gainsboro',
			}}
		>
			<div style={{
				background: 'green',
				width: '300px',
				height: '250px',
			}}
			/>
		</StickyContainer>
	))
	.add('disabled', () => (
		<StickyContainer
			disabled={boolean('disabled', true)}
			ignore_bottom
			style={{
				margin: '300px auto 1000px auto',
				width: '300px',
				height: '250px',
				background: 'gainsboro',
			}}
		>
			<div style={{
				background: 'green',
				width: '300px',
				height: '250px',
			}}
			/>
		</StickyContainer>
	));
