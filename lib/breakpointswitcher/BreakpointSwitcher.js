import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import BreakpointDetector from "../breakpointdetector";
var context = createContext({
  breakpoints: []
});
var Provider = context.Provider,
    Consumer = context.Consumer;

var BreakpointToggle = function BreakpointToggle(_ref) {
  var include = _ref.include,
      exclude = _ref.exclude,
      default_render = _ref.default_render,
      children = _ref.children;
  return React.createElement(Consumer, null, function (_ref2) {
    var breakpoints = _ref2.breakpoints;

    if (!breakpoints.length && default_render) {
      return children;
    }

    var included; // test inclusions

    if (isString(include)) {
      included = breakpoints.indexOf(include) > -1;
    } else if (isArray(include)) {
      included = include.filter(function (bp) {
        return breakpoints.indexOf(bp) > -1;
      }).length > 0;
    } // if included, test exclusions


    if (included) {
      var excluded;

      if (isString(exclude)) {
        excluded = breakpoints.indexOf(exclude) > -1;
      } else if (isArray(exclude)) {
        excluded = exclude.filter(function (bp) {
          return breakpoints.indexOf(bp) > -1;
        }).length > 0;
      }

      if (excluded) {
        return null;
      }
    }

    return included ? children : null;
  });
};

BreakpointToggle.propTypes = {
  include: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  exclude: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  default_render: PropTypes.bool,
  children: PropTypes.node
};
BreakpointToggle.defaultProps = {
  include: ['for-phone-only', 'for-tablet-portrait-up', 'for-tablet-landscape-up', 'for-desktop-up', 'for-wide-desktop-up'],
  exclude: [],
  default_render: false
};

var BreakpointSwitcher =
/*#__PURE__*/
function (_Component) {
  _inherits(BreakpointSwitcher, _Component);

  function BreakpointSwitcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BreakpointSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BreakpointSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      breakpoints: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleBreakpointChange", function (breakpoints) {
      _this.setState({
        breakpoints: breakpoints
      });
    });

    return _this;
  }

  _createClass(BreakpointSwitcher, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: {
          breakpoints: this.state.breakpoints
        }
      }, React.createElement(React.Fragment, null, this.props.children, React.createElement(BreakpointDetector, {
        debug: this.props.debug,
        onChange: this.handleBreakpointChange
      })));
    }
  }]);

  return BreakpointSwitcher;
}(Component);

_defineProperty(BreakpointSwitcher, "propTypes", {
  debug: PropTypes.bool,
  children: PropTypes.node
});

export default BreakpointSwitcher;
export { BreakpointToggle };
//# sourceMappingURL=BreakpointSwitcher.js.map