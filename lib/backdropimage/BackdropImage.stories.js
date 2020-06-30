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
import { withKnobs, text, number, select, object } from '@storybook/addon-knobs';
import BackdropImage from "./BackdropImage";

var getSrc = function getSrc(w) {
  return "https://s3.reutersmedia.net/resources/r/?m=02&d=20190724&t=2&i=1411634561&r=LYNXNPEF6N276&w=".concat(w);
};

var src = getSrc(300);
var srcSet = "".concat(getSrc(300), " 300w, ").concat(getSrc(768), " 768w, ").concat(getSrc(1280), " 1280w");

var placeholder_options = _objectSpread2({}, BackdropImage.Placeholder, {
  'false': false
});

storiesOf('rcom-common-ui/BackdropImage', module).addDecorator(centered).addDecorator(withKnobs({
  escapeHTML: false
})).add('default', function () {
  return React.createElement(BackdropImage, {
    style: object('style', {
      width: '100vw',
      height: '100vh'
    }),
    src: text('src', src),
    srcSet: text('srcSet', srcSet),
    placeholder: select('placeholder', placeholder_options, BackdropImage.Placeholder.LOGO_LIGHT)
  });
}).add('aspect ratio, fill mode and position', function () {
  return React.createElement(BackdropImage, {
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