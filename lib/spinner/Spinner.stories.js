import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean as _boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import Spinner from "./Spinner";
var black_bg = {
  name: 'black',
  value: '#000'
};
var spinner_only_style = {
  width: '30px',
  height: '30px',
  outline: '1px solid lightgray'
};
var spinner_and_text_style = {
  width: '30px',
  outline: '1px solid lightgray'
};
storiesOf('rcom-common-ui/Spinner', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return React.createElement(Spinner, {
    style: object('style', spinner_only_style),
    color: select('color', Spinner.Color, Spinner.Color.ORANGE),
    show: _boolean('show', true)
  });
}, {
  backgrounds: [black_bg]
}).add('with text', function () {
  return React.createElement(Spinner, {
    style: object('style', spinner_and_text_style),
    color: select('color', Spinner.Color, Spinner.Color.ORANGE),
    show: _boolean('show', true),
    text: text('text', 'Loading...')
  });
}, {
  backgrounds: [black_bg]
});
//# sourceMappingURL=Spinner.stories.js.map