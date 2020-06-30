import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import TextInput from './TextInput';


const style = {
	width: '400px',
	height: '30px',
	padding: '10px',
};

storiesOf('component-library/TextInput', module)
	.addDecorator(centered)
	.add('default', () => {
		return (
			<TextInput
				style={style}
				placeholder='Search...'
			/>
		);
	});
