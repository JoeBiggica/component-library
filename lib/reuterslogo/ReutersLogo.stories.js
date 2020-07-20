import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import ReutersLogo from "./ReutersLogo";
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
storiesOf('component-library/ReutersLogo', module).addDecorator(withKnobs).addDecorator(centered).add('Five rings with gray text (default)', function () {
  return /*#__PURE__*/React.createElement(ReutersLogo, {
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [white_bg]
}).add('Five rings with Reuters white text', function () {
  return /*#__PURE__*/React.createElement(ReutersLogo, {
    theme: ReutersLogo.Theme.WHITE_TEXT,
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [black_bg]
}).add('Five rings with Reuters white color', function () {
  return /*#__PURE__*/React.createElement(ReutersLogo, {
    theme: ReutersLogo.Theme.ALL_WHITE,
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [black_bg]
}).add('Five rings with Reuters black color', function () {
  return /*#__PURE__*/React.createElement(ReutersLogo, {
    theme: ReutersLogo.Theme.ALL_BLACK,
    title: "Reuters",
    icon: _boolean('icon', false),
    style: logo_style
  });
}, {
  backgrounds: [white_bg]
}).add('Five rings icon', function () {
  return /*#__PURE__*/React.createElement(ReutersLogo, {
    icon: _boolean('icon', true),
    style: logo_style
  });
}, {
  backgrounds: [white_bg]
});
//# sourceMappingURL=ReutersLogo.stories.js.map