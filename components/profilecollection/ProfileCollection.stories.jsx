import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import ProfileCollection from './ProfileCollection';

const profiles = [
	{
		name: 'Thunder Genesis',
		url: 'biggica.com',
		image_url: 'https://www.reliableglassandmetal.com/static/yellow-medallion.png'
	},
	{
		name: 'Water Exodus',
		url: 'biggica.com',
		image_url: 'https://www.reliableglassandmetal.com/static/water-medallion.png'
	},
	{
		name: 'Fire Leviticus',
		image_url: 'https://www.reliableglassandmetal.com/static/fire-medallion.png'
	},
	{
		name: 'Maurice',
		image_url: 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/profiles/maurice-morrison/maurice-morrison-avatar.jpg'
	}
];

storiesOf('component-library/ProfileCollection', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<div style={{width: '500px', margin: '0 auto'}}>
				<ProfileCollection 
					profiles={profiles}
					round={boolean('round', true)}
				/>
			</div>
		);
	});
