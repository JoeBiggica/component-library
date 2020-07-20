import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";

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

import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
var context = createContext({
  active: false,
  onToggle: function onToggle() {}
});
var Provider = context.Provider,
    Consumer = context.Consumer;

var ToggleButton = function ToggleButton(_ref) {
  var component = _ref.component,
      className = _ref.className,
      children = _ref.children,
      hide_on_toggle = _ref.hide_on_toggle,
      handleClickOnChild = _ref.handleClickOnChild;
  return /*#__PURE__*/React.createElement(Consumer, null, function (_ref2) {
    var active = _ref2.active,
        onToggle = _ref2.onToggle;

    if (active && hide_on_toggle) {
      return null;
    }

    var Comp = component;
    /**
     * Intercept toggle function and fire custom event comming from an
     * React component
     * @typedef {object} ClickEvent
     * @param {ClickEvent} event
     */

    var handleClick = function handleClick(event) {
      if (typeof Comp === 'function' && handleClickOnChild) {
        handleClickOnChild(event);
      }

      onToggle(!active);
    };

    return /*#__PURE__*/React.createElement(Comp, {
      className: className,
      onClick: handleClick
    }, children);
  });
};

ToggleButton.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
  hide_on_toggle: PropTypes.bool,
  handleClickOnChild: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};
ToggleButton.defaultProps = {
  component: 'button',
  hide_on_toggle: false,
  handleClickOnChild: false
};

var ToggleResponderComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(ToggleResponderComponent, _PureComponent);

  var _super = _createSuper(ToggleResponderComponent);

  function ToggleResponderComponent(props) {
    var _this;

    _classCallCheck(this, ToggleResponderComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      var container = _this.container_ref.current;

      if (container && !container.contains(e.target)) {
        _this.props.onToggle(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'Escape') {
        _this.props.onToggle(false);
      }
    });

    _this.container_ref = React.createRef();
    return _this;
  }

  _createClass(ToggleResponderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.active) {
        if (this.props.toggle_click_outside) {
          document.addEventListener('mousedown', this.handleClickOutside);
        }

        document.addEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props, prev_state) {
      if (this.props.active !== prev_props.active) {
        if (this.props.toggle_click_outside) {
          if (this.props.active) {
            document.addEventListener('mousedown', this.handleClickOutside);
          } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
          }
        }

        if (this.props.active) {
          document.addEventListener('keydown', this.handleKeyDown);
        } else {
          document.removeEventListener('keydown', this.handleKeyDown);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.className,
        ref: this.container_ref
      }, this.props.children);
    }
  }]);

  return ToggleResponderComponent;
}(PureComponent);

_defineProperty(ToggleResponderComponent, "propTypes", {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  toggle_click_outside: PropTypes.bool
});

_defineProperty(ToggleResponderComponent, "defaultProps", {
  toggle_click_outside: false
});

var ToggleResponder = function ToggleResponder(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      toggle_click_outside = _ref3.toggle_click_outside;
  return /*#__PURE__*/React.createElement(Consumer, null, function (_ref4) {
    var active = _ref4.active,
        onToggle = _ref4.onToggle;
    return active ? /*#__PURE__*/React.createElement(ToggleResponderComponent, {
      className: className,
      toggle_click_outside: toggle_click_outside,
      active: active,
      onToggle: onToggle
    }, children) : null;
  });
};

ToggleResponder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  toggle_click_outside: PropTypes.bool
};

var ToggleSwitcher = /*#__PURE__*/function (_PureComponent2) {
  _inherits(ToggleSwitcher, _PureComponent2);

  var _super2 = _createSuper(ToggleSwitcher);

  function ToggleSwitcher() {
    var _this2;

    _classCallCheck(this, ToggleSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      active: false
    });

    _defineProperty(_assertThisInitialized(_this2), "handleToggle", function (active) {
      _this2.setState({
        active: active
      });

      _this2.props.onToggle(active);
    });

    return _this2;
  }

  _createClass(ToggleSwitcher, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        value: {
          active: this.state.active,
          onToggle: this.handleToggle
        }
      }, this.props.children);
    }
  }]);

  return ToggleSwitcher;
}(PureComponent);

_defineProperty(ToggleSwitcher, "propTypes", {
  children: PropTypes.node,
  onToggle: PropTypes.func
});

_defineProperty(ToggleSwitcher, "defaultProps", {
  onToggle: function onToggle() {}
});

export default ToggleSwitcher;
export { ToggleButton, ToggleResponder };
//# sourceMappingURL=ToggleSwitcher.js.map