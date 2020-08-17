import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import MartialBaseLogo from "./MartialBaseLogo";
var white_bg = {
  name: 'white',
  value: '#FFF',
  default: true
};
var black_bg = {
  name: 'black',
  value: '#000',
  default: true
};
var rangoon_green_bg = {
  name: 'rangoon green',
  value: '#1A1A1A',
  default: true
};
var logo_style = {
  width: '350px'
};
storiesOf('component-library/MartialBaseLogo', module).addDecorator(withKnobs).addDecorator(centered).add('White', function () {
  return /*#__PURE__*/React.createElement(MartialBaseLogo, {
    theme: MartialBaseLogo.Theme.WHITE,
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [black_bg]
}).add('Black', function () {
  return /*#__PURE__*/React.createElement(MartialBaseLogo, {
    theme: MartialBaseLogo.Theme.BLACK,
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [white_bg]
});
//# sourceMappingURL=MartialBaseLogo.stories.js.map