import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import ContactCard from './ContactCard';
import TextLabel from 'components/textlabel';

const white_bg = {
	name: 'white',
	value: '#FFF',
};

const black_bg = {
	name: 'black',
	value: '#000',
};

storiesOf('component-library/ContactCard', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={object('style', {maxWidth: '500px'})}>
			<ContactCard 
				title={text('title', 'Contact Title')}
				street={text('title', '95 Lincoln Ave')}
				city={text('title', 'Staten Island')}
				state={text('title', 'NY')}
				zipcode={text('title', '10306')}
				email={text('title', 'bill.fong@fongshungga.com')}
			/>
		</div>
	), {
		backgrounds: [white_bg, black_bg]
	});
