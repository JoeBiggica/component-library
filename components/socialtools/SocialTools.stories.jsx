import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, array, boolean } from '@storybook/addon-knobs';

import SocialTools, {
	Facebook,
	Twitter,
	YouTube,
	Instagram,
	LinkedIn,
	Rss,
	Email,
	Link,
} from './index';


const rangoon_green_bg = {
	name: 'rangoon green',
	value: '#1A1A1A',
	default: true,
};

const share = {
	title: 'Hurricane Michael gains strength as Floridians flee to higher ground',
	url: 'https://reut.rs/2QFN7d1'
};

const all_platforms = ['facebook', 'twitter', 'youtube', 'linkedin', 'instagram', 'rss', 'email', 'link'];

storiesOf('component-library/SocialTools', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('facebook', () => (
		<Facebook
			share={share}
		/>
	))
	.add('twitter', () => (
		<Twitter
			share={share}
		/>
	))
	.add('youtube', () => (
		<YouTube />
	))
	.add('Instagram', () => (
		<Instagram />
	))
	.add('LinkedIn', () => (
		<LinkedIn />
	))
	.add('RSS', () => (
		<Rss />
	))
	.add('Email', () => (
		<Email
			share={share}
		/>
	))
	.add('Link', () => (
		<Link
			share={share}
		/>
	))
	.add('multiple platforms', () => (
		<SocialTools
			platforms={array('platforms', all_platforms)}
			share={share}
		/>
	))
	.add('borderless', () => (
		<SocialTools
			platforms={all_platforms}
			share={share}
			borderless={boolean('borderless', true)}
		/>
	));

storiesOf('component-library/SocialTools/colors', module)
	.addDecorator(centered)
	.add('grey to platform theme (default)', () => (
		<SocialTools
			platforms={all_platforms}
			share={share}
			color={SocialTools.Color.GREY_TO_ORIGINAL}
		/>
	))
	.add('white to platform theme', () => (
		<SocialTools
			platforms={all_platforms}
			share={share}
			color={SocialTools.Color.WHITE_TO_ORIGINAL}
		/>
	), {
		backgrounds: [rangoon_green_bg]
	})
	.add('always grey', () => (
		<SocialTools
			platforms={all_platforms}
			share={share}
			color={SocialTools.Color.ALWAYS_GREY}
		/>
	))
	.add('always white', () => (
		<SocialTools
			platforms={all_platforms}
			share={share}
			color={SocialTools.Color.ALWAYS_WHITE}
		/>
	), {
		backgrounds: [rangoon_green_bg]
	});
