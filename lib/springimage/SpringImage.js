import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

require("./SpringImage.css");

var styles = {
  "container": "SpringImage__container___174EQ",
  "image": "SpringImage__image___2_-6u",
  "title": "SpringImage__title___19lB0"
};

var calc = function calc(x, y) {
  return [x - window.innerWidth / 10, y - window.innerHeight / 10];
};

var trans_image = function trans_image(x, y) {
  return "translate3d(".concat(x / 10, "px,").concat(y / 10, "px,0)");
};

var trans_title = function trans_title(x, y) {
  return "translate3d(".concat(x / 5, "px,").concat(y / 50, "px,0)");
};

function SpringImage(props) {
  var className = props.className,
      style = props.style,
      image_url = props.image_url,
      title = props.title;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setHovered = _useState2[1];

  var _useSpring = useSpring(function () {
    return {
      xy: [0, 0],
      config: {
        mass: 10,
        tension: 550,
        friction: 110
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      amimateProps = _useSpring2[0],
      setAnimateProps = _useSpring2[1];

  var image_styles = {
    backgroundImage: "url(".concat(image_url, ")")
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['container'], className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return setAnimateProps({
        xy: calc(0, 0)
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setAnimateProps({
        xy: [0, 0]
      });
    }
  }, /*#__PURE__*/React.createElement(animated.div, {
    className: classnames(styles['image']),
    style: _objectSpread({
      transform: amimateProps.xy.interpolate(trans_image)
    }, image_styles)
  }), title && /*#__PURE__*/React.createElement(animated.div, {
    className: classnames(styles['title']),
    style: {
      transform: amimateProps.xy.interpolate(trans_title)
    }
  }, title)));
}

SpringImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  image_url: PropTypes.string
};
export default SpringImage;
//# sourceMappingURL=SpringImage.js.map