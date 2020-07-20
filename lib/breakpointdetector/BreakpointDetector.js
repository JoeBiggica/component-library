import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import throttle from 'lodash/throttle';
import isEqual from 'lodash/isEqual';

require("./BreakpointDetector.css");

var styles = {
  "container": "BreakpointDetector__container___2fuT_",
  "for-phone-only": "BreakpointDetector__for-phone-only___4_LFl",
  "for-tablet-portrait-up": "BreakpointDetector__for-tablet-portrait-up___3JyHf",
  "for-tablet-landscape-up": "BreakpointDetector__for-tablet-landscape-up___1WuSv",
  "for-desktop-up": "BreakpointDetector__for-desktop-up___3y1_j",
  "for-wide-desktop-up": "BreakpointDetector__for-wide-desktop-up___1ZVju",
  "debug": "BreakpointDetector__debug___2G7Er"
};
/**
 * Breakpoint detector
 */

var BreakpointDetector = /*#__PURE__*/function (_PureComponent) {
  _inherits(BreakpointDetector, _PureComponent);

  var _super = _createSuper(BreakpointDetector);

  // Default state
  function BreakpointDetector(props) {
    var _this;

    _classCallCheck(this, BreakpointDetector);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      breakpoints: []
    });

    _this.breakpoints = ['for-phone-only', 'for-tablet-portrait-up', 'for-tablet-landscape-up', 'for-desktop-up', 'for-wide-desktop-up']; // Keep element refs here

    _this.elements = {};
    _this.renderBreakpoint = _this.renderBreakpoint.bind(_assertThisInitialized(_this));
    _this.setBreakpointRef = _this.setBreakpointRef.bind(_assertThisInitialized(_this));
    _this.detectChange = _this.detectChange.bind(_assertThisInitialized(_this));
    _this.throttledDetectChange = throttle(_this.detectChange, 200);
    return _this;
  }

  _createClass(BreakpointDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.throttledDetectChange);
      this.detectChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.throttledDetectChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props, prev_state) {
      if (prev_state.breakpoints !== this.state.breakpoints) {
        this.props.onChange(this.state.breakpoints);

        if (!prev_state.breakpoints.length) {
          this.props.onInitialChange(this.state.breakpoints);
        }
      }
    }
  }, {
    key: "detectChange",
    value: function detectChange() {
      var res = Object.values(this.elements).filter(this.elementDisplayed);
      var breakpoints = res.map(function (el) {
        return el.getAttribute('data-name');
      });

      if (!isEqual(this.state.breakpoints, breakpoints)) {
        this.setState({
          breakpoints: breakpoints
        });
      }
    }
    /**
     * Check if element has display set to block
     * @param {Element} $el
     * @return {boolean}
     */

  }, {
    key: "elementDisplayed",
    value: function elementDisplayed(el) {
      if (typeof window.getComputedStyle !== 'undefined') {
        return window.getComputedStyle(el, null).display !== 'none';
      }

      return el.currentStyle && el.currentStyle.display !== 'none';
    } // Set reference to breakpoint element

  }, {
    key: "setBreakpointRef",
    value: function setBreakpointRef(component) {
      if (!component) {
        return;
      }

      this.elements[component.className] = component;
    }
    /**
     * Render a single breakpoint
     * @return {Component}
     */

  }, {
    key: "renderBreakpoint",
    value: function renderBreakpoint(key) {
      return /*#__PURE__*/React.createElement("span", {
        key: key,
        ref: this.setBreakpointRef,
        className: styles[key],
        "data-name": key
      }, key);
    }
  }, {
    key: "render",
    value: function render() {
      var container_classname = classnames(styles['container'], this.props.debug && styles['debug']);
      return /*#__PURE__*/React.createElement("div", {
        className: container_classname
      }, this.breakpoints.map(this.renderBreakpoint));
    }
  }]);

  return BreakpointDetector;
}(PureComponent);

_defineProperty(BreakpointDetector, "propTypes", {
  debug: PropTypes.bool,
  onChange: PropTypes.func,
  onInitialChange: PropTypes.func
});

_defineProperty(BreakpointDetector, "defaultProps", {
  debug: false,
  onChange: function onChange() {},
  onInitialChange: function onInitialChange() {}
});

export { BreakpointDetector as default };
//# sourceMappingURL=BreakpointDetector.js.map