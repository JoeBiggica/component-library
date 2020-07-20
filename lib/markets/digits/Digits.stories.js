import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, number, boolean as _boolean } from '@storybook/addon-knobs';
import Digits from "./Digits";
storiesOf('component-library/markets/Digits', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement(Digits, {
    value: number('value', 3001),
    fixed_decimals: number('fixed_decimals', 2),
    plus_sign: _boolean('plus_sign', false),
    change_color: _boolean('color_change', false),
    font: Digits.Font.REGULAR,
    color: Digits.Color.BLACK,
    tag: "span"
  });
});
//# sourceMappingURL=Digits.stories.js.map