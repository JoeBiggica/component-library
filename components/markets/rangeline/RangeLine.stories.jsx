import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, number, boolean, text, color, select } from '@storybook/addon-knobs';

import RangeLine from './RangeLine';

const line_types = {
	solid: 'solid',
	measured: 'measured',
};

storiesOf('component-library/markets/RangeLine', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<RangeLine 
				style={{width: '250px'}}
				values={{
					min: number('min', 1),
					max: number('max', 100),
					actual: number('actual', 25),
				}} 
				styleset={{
					line: {
						height: text('line_height', '6px'),
						color: color('line_color', '#EBEBEB'),
						type: select('line_type', line_types),
					},
					marker: {
						color: color('marker_color', '#000000'),
					}
				}} 
			/>
		);
	});
