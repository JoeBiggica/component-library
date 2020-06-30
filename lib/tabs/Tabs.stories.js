import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Tabs from "./Tabs";
var items = [{
  name: 'Batman'
}, {
  name: 'Superman'
}, {
  name: 'Wonder Woman'
}, {
  name: 'Aquaman'
}, {
  name: 'Flash'
}, {
  name: 'Martian Manhunter'
}, {
  name: 'Green Arrow'
}, {
  name: 'Cyborg'
}];
var style = {
  width: '100vw',
  height: '35px'
};
storiesOf('rcom-common-ui/Tabs', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return React.createElement(Tabs, {
    style: style,
    items: items
  });
}).add('initial index', function () {
  return React.createElement(Tabs, {
    style: style,
    initial_index: number('initial_index', 1),
    items: items
  });
});
//# sourceMappingURL=Tabs.stories.js.map