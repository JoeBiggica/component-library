import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from '@testing-library/react';
import Image from "../Image";
var commonProps = {
  is_amp: false,
  src: 'source_path',
  alt: 'alt',
  fill_mode: 'fit',
  placeholder: 'logo-light'
};
describe('<Image />', function () {
  it('should render Image component correctly', function () {
    var _render = render( /*#__PURE__*/React.createElement(Image, commonProps)),
        container = _render.container;

    expect(container).toMatchSnapshot();
  });
  it('should render Image component with amp tag', function () {
    var _render2 = render( /*#__PURE__*/React.createElement(Image, _extends({}, commonProps, {
      is_amp: true
    }))),
        container = _render2.container;

    expect(container).toMatchSnapshot();
  });
  it('should render Image component with aspect_ratio', function () {
    var _render3 = render( /*#__PURE__*/React.createElement(Image, _extends({}, commonProps, {
      aspect_ratio: 380 / 249
    }))),
        container = _render3.container;

    expect(container).toMatchSnapshot();
  });
});
//# sourceMappingURL=Image.test.js.map