import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, array, boolean as _boolean } from '@storybook/addon-knobs';
import SocialTools, { Facebook, Twitter, YouTube, Instagram, LinkedIn, Rss, Email, Link } from "./index";
var rangoon_green_bg = {
  name: 'rangoon green',
  value: '#1A1A1A',
  default: true
};
var share = {
  title: 'Hurricane Michael gains strength as Floridians flee to higher ground',
  url: 'https://reut.rs/2QFN7d1'
};
var all_platforms = ['facebook', 'twitter', 'youtube', 'linkedin', 'instagram', 'rss', 'email', 'link'];
storiesOf('rcom-common-ui/SocialTools', module).addDecorator(centered).addDecorator(withKnobs).add('facebook', function () {
  return React.createElement(Facebook, {
    share: share
  });
}).add('twitter', function () {
  return React.createElement(Twitter, {
    share: share
  });
}).add('youtube', function () {
  return React.createElement(YouTube, null);
}).add('Instagram', function () {
  return React.createElement(Instagram, null);
}).add('LinkedIn', function () {
  return React.createElement(LinkedIn, null);
}).add('RSS', function () {
  return React.createElement(Rss, null);
}).add('Email', function () {
  return React.createElement(Email, {
    share: share
  });
}).add('Link', function () {
  return React.createElement(Link, {
    share: share
  });
}).add('multiple platforms', function () {
  return React.createElement(SocialTools, {
    platforms: array('platforms', all_platforms),
    share: share
  });
}).add('borderless', function () {
  return React.createElement(SocialTools, {
    platforms: all_platforms,
    share: share,
    borderless: _boolean('borderless', true)
  });
});
storiesOf('rcom-common-ui/SocialTools/colors', module).addDecorator(centered).add('gray to platform theme (default)', function () {
  return React.createElement(SocialTools, {
    platforms: all_platforms,
    share: share,
    color: SocialTools.Color.GRAY_TO_ORIGINAL
  });
}).add('white to platform theme', function () {
  return React.createElement(SocialTools, {
    platforms: all_platforms,
    share: share,
    color: SocialTools.Color.WHITE_TO_ORIGINAL
  });
}, {
  backgrounds: [rangoon_green_bg]
}).add('always gray', function () {
  return React.createElement(SocialTools, {
    platforms: all_platforms,
    share: share,
    color: SocialTools.Color.ALWAYS_GRAY
  });
}).add('always white', function () {
  return React.createElement(SocialTools, {
    platforms: all_platforms,
    share: share,
    color: SocialTools.Color.ALWAYS_WHITE
  });
}, {
  backgrounds: [rangoon_green_bg]
});
//# sourceMappingURL=SocialTools.stories.js.map