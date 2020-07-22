import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, object, select, color } from '@storybook/addon-knobs';

var Checkmark = function Checkmark(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M4.21 6.796L1.417 4.003.003 5.417 4.21 9.624l8.207-8.207L11.003.003z"
  }));
};

Checkmark.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13 10"
};
import TextLabel from "./TextLabel";
var black_bg = {
  name: 'black',
  value: '#000000',
  default: true
};
var example_text = 'This is the TextLabel text.';
storiesOf('component-library/TextLabel', module).addDecorator(centered).addDecorator(withKnobs).add('render plain text', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    text: text('text', example_text)
  });
}).add('render node array as children', function () {
  var text = [/*#__PURE__*/React.createElement(Checkmark, {
    key: "icon",
    style: {
      marginRight: '6px',
      height: '9px',
      verticalAlign: 'middle'
    }
  }), 'Newsletter Subscribed'];
  return /*#__PURE__*/React.createElement(TextLabel, {
    text: text,
    color: TextLabel.Color.BLUE
  });
}).add('custom tag name', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    tag: text('tag', 'span'),
    text: example_text
  });
}).add('custom style', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    style: object('style', {
      fontSize: '20px'
    }),
    text: example_text
  });
}).add('turn into anchor tag when use href', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    href: text('href', 'https://www.reuters.com/'),
    target: text('target', '_blank'),
    text: example_text
  });
}).add('font options', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    font: select('font', TextLabel.Font),
    text: example_text
  });
}).add('color options', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    color: select('color', TextLabel.Color),
    text: example_text
  });
}).add('custom CSS color', function () {
  return /*#__PURE__*/React.createElement(TextLabel, {
    color: color('color', '#FF1493'),
    text: example_text
  });
});
//# sourceMappingURL=TextLabel.stories.js.map