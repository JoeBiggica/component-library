import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import TextInput from "./TextInput";
var style = {
  width: '400px',
  height: '30px',
  padding: '10px'
};
storiesOf('rcom-common-ui/TextInput', module).addDecorator(centered).add('default', function () {
  return React.createElement(TextInput, {
    style: style,
    placeholder: "Search..."
  });
});
//# sourceMappingURL=TextInput.stories.js.map