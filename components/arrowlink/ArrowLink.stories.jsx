import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ArrowLink from './ArrowLink';

storiesOf('component-library/ArrowLink', module)
	.addDecorator(centered)
	.add('default', () => {
		return (
			<ArrowLink
				text={text('text', 'Dracarys')}
				href={text('href', '/')}
				target={text('target', '_blank')}
			/>
		);
	});
