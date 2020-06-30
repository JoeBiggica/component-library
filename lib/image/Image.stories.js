import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.object.keys";

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, select, object, boolean as _boolean } from '@storybook/addon-knobs';
import Image from "./Image"; // import { importContentOfCssFile } from './../../.storybook/helpers';
// const image_css_url = '../../lib/image/Image.css';

var placeholder_options = _objectSpread2({}, Image.Placeholder, {
  'false': false
});

var styles = {};
storiesOf('rcom-common-ui/Image', module).addDecorator(centered).addDecorator(withKnobs({
  escapeHTML: false
})).add('default', function () {
  return React.createElement(Image, {
    style: object('style', {
      width: '100vw',
      maxWidth: '380px'
    }),
    src: text('src', 'https://pictures.reuters.com/Doc/RTR/Media/TR3_UNWATERMARKED/d/e/5/1/RTS2NYXF.jpg'),
    aspect_ratio: number('aspect_ratio', 380 / 249),
    alt: text('alt', 'Queen allows Johnson to suspend parliament')
  });
}).add('fill mode and placeholder', function () {
  return React.createElement(Image, {
    style: object('style', {
      width: '500px',
      height: '250px'
    }),
    fill_mode: select('fill_mode', Image.FillMode, Image.FillMode.FIT),
    placeholder: select('placeholder', placeholder_options, Image.Placeholder.LOGO_LIGHT),
    src: text('src', 'https://pictures.reuters.com/Doc/RTR/Media/TR3_UNWATERMARKED/d/e/5/1/RTS2NYXF.jpg'),
    alt: text('alt', 'Queen allows Johnson to suspend parliament')
  });
});
//# sourceMappingURL=Image.stories.js.map