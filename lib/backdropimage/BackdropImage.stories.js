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
import { withKnobs, text, number, select, object } from '@storybook/addon-knobs';
import BackdropImage from "./BackdropImage";
var src = 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/double-dragon-mural.jpg';
var srcSet = "".concat(src, " 300w, ").concat(src, " 768w, ").concat(src, " 1280w");

var placeholder_options = _objectSpread(_objectSpread({}, BackdropImage.Placeholder), {}, {
  'false': false
});

storiesOf('component-library/BackdropImage', module).addDecorator(centered).addDecorator(withKnobs({
  escapeHTML: false
})).add('default', function () {
  return /*#__PURE__*/React.createElement(BackdropImage, {
    style: object('style', {
      width: '100vw',
      height: '100vh'
    }),
    src: text('src', src),
    srcSet: text('srcSet', srcSet),
    placeholder: select('placeholder', placeholder_options, BackdropImage.Placeholder.LOGO_LIGHT)
  });
}).add('aspect ratio, fill mode and position', function () {
  return /*#__PURE__*/React.createElement(BackdropImage, {
    style: object('style', {
      width: '100vw',
      maxWidth: '640px'
    }),
    src: text('src', src),
    srcSet: text('srcSet', srcSet),
    aspect_ratio: number('aspect_ratio', 1.75),
    fill_mode: select('fill_mode', BackdropImage.FillMode, BackdropImage.FillMode.FIT),
    fill_position: select('fill_position', BackdropImage.FillPosition, BackdropImage.FillPosition.TOP_CENTER),
    placeholder: BackdropImage.Placeholder.LOGO_DARK
  });
});
//# sourceMappingURL=BackdropImage.stories.js.map