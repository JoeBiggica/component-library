import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean as _boolean } from '@storybook/addon-knobs';
import StickyContainer from "./StickyContainer";
storiesOf('component-library/StickyContainer', module).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement(StickyContainer, {
    style: {
      margin: '300px auto 1000px auto',
      width: '300px',
      height: '600px',
      background: 'gainsboro'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'green',
      width: '300px',
      height: '250px'
    }
  }));
}).add('adapt to changing sticky or content height', function () {
  return /*#__PURE__*/React.createElement(StickyContainer, {
    style: {
      margin: '300px auto 1000px auto',
      width: '300px',
      height: text('container height', '1200px'),
      background: 'gainsboro'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'green',
      width: '300px',
      height: text('content height', '250px')
    }
  }));
}).add('ignore bottom', function () {
  return /*#__PURE__*/React.createElement(StickyContainer, {
    ignore_bottom: _boolean('ignore_bottom', true),
    style: {
      margin: '300px auto 1000px auto',
      width: '300px',
      height: '600px',
      background: 'gainsboro'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'green',
      width: '300px',
      height: '250px'
    }
  }));
}).add('disabled', function () {
  return /*#__PURE__*/React.createElement(StickyContainer, {
    disabled: _boolean('disabled', true),
    ignore_bottom: true,
    style: {
      margin: '300px auto 1000px auto',
      width: '300px',
      height: '250px',
      background: 'gainsboro'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'green',
      width: '300px',
      height: '250px'
    }
  }));
});
//# sourceMappingURL=StickyContainer.stories.js.map