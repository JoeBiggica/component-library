import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { market_data } from './mock_data.json';

import TickerTape from './TickerTape';

const quotes = [
	...market_data.indices,
	...market_data.bonds,
	...market_data.commodity_futures,
	...market_data.currencypairs,
];

storiesOf('component-library/markets/TickerTape', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<TickerTape
				style={{
					width: '100vw',
					maxWidth: '800px',
				}}
				quotes={quotes}
			/>
		);
	});
