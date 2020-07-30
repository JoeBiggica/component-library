import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean as _boolean, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import PageHeader from "./PageHeader";
var black_bg = {
  name: 'black',
  value: '#000'
};
storiesOf('component-library/PageHeader', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: text('title', 'Page Header Title'),
    font_color: color('font_color', 'white'),
    background: _boolean('background', true),
    background_color: color('background_color', 'blue'),
    background_skew: _boolean('background_skew', false),
    underline: _boolean('underline', false),
    underline_color: color('underline_color', 'blue')
  }));
});
//# sourceMappingURL=PageHeader.stories.js.map