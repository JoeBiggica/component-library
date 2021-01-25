import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import SiteSearch, { SearchField } from './SiteSearch';


const search_field_style = {
	width: '400px',
	padding: '10px',
	border: '1px solid lightgrey',
};

storiesOf('component-library/SiteSearch', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<SiteSearch>
			<SearchField
				style={search_field_style}
				placeholder='Search'
				color={select('color', SearchField.Color, SearchField.Color.GREY)}
				auto_focus
			/>
		</SiteSearch>
	));
