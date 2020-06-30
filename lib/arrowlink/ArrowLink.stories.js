import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ArrowLink from "./ArrowLink";
storiesOf('rcom-common-ui/ArrowLink', module).addDecorator(centered).add('default', function () {
  return React.createElement(ArrowLink, {
    text: text('text', 'Dracarys'),
    href: text('href', '/'),
    target: text('target', '_blank')
  });
});
//# sourceMappingURL=ArrowLink.stories.js.map