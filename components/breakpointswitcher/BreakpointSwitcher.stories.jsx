import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import BreakpointSwitcher, { BreakpointToggle } from './BreakpointSwitcher';

const style = {
	border: '1px solid red',
	padding: '20px',
};

const all_breakpoints = [
	'for-phone-only',
	'for-tablet-portrait-up',
	'for-tablet-landscape-up',
	'for-desktop-up',
	'for-wide-desktop-up',
];

storiesOf('component-library/BreakpointSwitcher', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<BreakpointSwitcher debug>
			<BreakpointToggle>
				<div style={style}>
					This renders at all breakpoints
				</div>
			</BreakpointToggle>
		</BreakpointSwitcher>
	))
	.add('render only at included breakpoints', () => (
		<BreakpointSwitcher debug>
			<BreakpointToggle
				include={array('include', all_breakpoints)}
			>
				<div style={style}>
					This renders at included breakpoints
				</div>
			</BreakpointToggle>
		</BreakpointSwitcher>
	))
	.add('not to render at excluded breakpoints', () => (
		<BreakpointSwitcher debug>
			<BreakpointToggle
				exclude={array('exclude', all_breakpoints)}
			>
				<div style={style}>
					This renders at all breakpoints except those excluded
				</div>
			</BreakpointToggle>
		</BreakpointSwitcher>
	))
	.add('always render even no breakpoints are found (SSR)', () => (
		<BreakpointSwitcher debug>
			<BreakpointToggle default_render>
				<div style={style}>
					This should renders without regard to the breakpoints
				</div>
			</BreakpointToggle>
		</BreakpointSwitcher>
	));
