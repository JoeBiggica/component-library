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
				street={text('street', '95 Lincoln Ave')}
				city={text('city', 'Staten Island')}
				state={text('state', 'NY')}
				zipcode={text('zipcode', '10306')}
				phone={text('phone', '7181234567')}
				email={text('email', 'bill.fong@fongshungga.com')}
			/>
		</div>
	), {
		backgrounds: [white_bg, black_bg]
	});
