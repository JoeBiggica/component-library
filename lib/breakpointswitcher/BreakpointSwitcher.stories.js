import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import BreakpointSwitcher, { BreakpointToggle } from "./BreakpointSwitcher";
var style = {
  border: '1px solid red',
  padding: '20px'
};
var all_breakpoints = ['for-phone-only', 'for-tablet-portrait-up', 'for-tablet-landscape-up', 'for-desktop-up', 'for-wide-desktop-up'];
storiesOf('rcom-common-ui/BreakpointSwitcher', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return React.createElement(BreakpointSwitcher, {
    debug: true
  }, React.createElement(BreakpointToggle, null, React.createElement("div", {
    style: style
  }, "This renders at all breakpoints")));
}).add('render only at included breakpoints', function () {
  return React.createElement(BreakpointSwitcher, {
    debug: true
  }, React.createElement(BreakpointToggle, {
    include: array('include', all_breakpoints)
  }, React.createElement("div", {
    style: style
  }, "This renders at included breakpoints")));
}).add('not to render at excluded breakpoints', function () {
  return React.createElement(BreakpointSwitcher, {
    debug: true
  }, React.createElement(BreakpointToggle, {
    exclude: array('exclude', all_breakpoints)
  }, React.createElement("div", {
    style: style
  }, "This renders at all breakpoints except those excluded")));
}).add('always render even no breakpoints are found (SSR)', function () {
  return React.createElement(BreakpointSwitcher, {
    debug: true
  }, React.createElement(BreakpointToggle, {
    default_render: true
  }, React.createElement("div", {
    style: style
  }, "This should renders without regard to the breakpoints")));
});
//# sourceMappingURL=BreakpointSwitcher.stories.js.map