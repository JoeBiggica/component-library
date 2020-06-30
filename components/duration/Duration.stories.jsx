import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import Duration from './Duration';

const rangoon_green_bg = {
	name: 'rangoon green',
	value: '#1A1A1A',
	default: true,
};

storiesOf('component-library/Duration', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Duration
				seconds={number('seconds', 60)}
				font={select('font', Duration.Font, Duration.Font.SMALL_ALL_CAPS)}
				color={select('color', Duration.Color, Duration.Color.GRAY)}
			/>
		);
	});
