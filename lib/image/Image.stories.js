import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.object.keys";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, number, select, object, boolean as _boolean } from '@storybook/addon-knobs';
import Image from "./Image"; // import { importContentOfCssFile } from './../../.storybook/helpers';
// const image_css_url = '../../lib/image/Image.css';

var placeholder_options = _objectSpread(_objectSpread({}, Image.Placeholder), {}, {
  'false': false
});

var styles = {};
storiesOf('component-library/Image', module).addDecorator(centered).addDecorator(withKnobs({
  escapeHTML: false
})).add('default', function () {
  return /*#__PURE__*/React.createElement(Image, {
    style: object('style', {
      width: '100vw',
      maxWidth: '380px'
    }),
    src: text('src', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg'),
    aspect_ratio: number('aspect_ratio', 380 / 249),
    alt: text('alt', 'Picture from the Wong Fei Hung Museum')
  });
}).add('fill mode and placeholder', function () {
  return /*#__PURE__*/React.createElement(Image, {
    style: object('style', {
      width: '500px',
      height: '250px'
    }),
    fill_mode: select('fill_mode', Image.FillMode, Image.FillMode.FIT),
    placeholder: select('placeholder', placeholder_options, Image.Placeholder.LOGO_LIGHT),
    src: text('src', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg'),
    alt: text('alt', 'Picture from the Wong Fei Hung Museum')
  });
});
//# sourceMappingURL=Image.stories.js.map