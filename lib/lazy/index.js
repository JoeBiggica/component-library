import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Image from "../image";
import WithLazy from "./WithLazy"; // Lazy image

var ImageWithRef = React.forwardRef(function (props, ref) {
  return React.createElement(Image, _extends({}, props, {
    forwarded_ref: ref
  }));
});
var LazyImage = WithLazy(['src'])(ImageWithRef);
export { LazyImage };
//# sourceMappingURL=index.js.map