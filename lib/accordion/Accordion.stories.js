import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, boolean as _boolean } from '@storybook/addon-knobs';
import Accordion from "./Accordion";
var style = {
  width: '600px'
};
var items = [{
  title: 'Red',
  color: 'red'
}, {
  title: 'Blue',
  color: 'blue'
}, {
  title: 'Green',
  color: 'green'
}];

var renderHeader = function renderHeader(item, index, active) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: item.color,
      padding: '10px',
      border: "1px solid ".concat(item.color)
    }
  }, "".concat(item.title, ", active: ").concat(active));
};

var renderBody = function renderBody(item) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '200px',
      background: item.color
    }
  });
};

storiesOf('component-library/Accordion', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement(Accordion, {
    style: style,
    items: items,
    renderHeader: renderHeader,
    renderBody: renderBody
  });
}).add('initial active index', function () {
  return /*#__PURE__*/React.createElement(Accordion, {
    style: style,
    items: items,
    renderHeader: renderHeader,
    renderBody: renderBody,
    initial_active_index: number('initial_active_index', 0)
  });
}).add('collapse others', function () {
  return /*#__PURE__*/React.createElement(Accordion, {
    style: style,
    items: items,
    renderHeader: renderHeader,
    renderBody: renderBody,
    collapse_others: _boolean('collapse_others', true)
  });
}).add('transition duration', function () {
  return /*#__PURE__*/React.createElement(Accordion, {
    style: style,
    items: items,
    renderHeader: renderHeader,
    renderBody: renderBody,
    transition_duration: text('transition_duration', '200ms')
  });
});
//# sourceMappingURL=Accordion.stories.js.map