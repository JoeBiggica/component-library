import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";

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

import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var CaretUp = function CaretUp(props) {
  return React.createElement("svg", props, React.createElement("path", {
    fill: "#EBEBEB",
    d: "M10 .1l9.9 9.9H.1z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M10 1.1l8.9 8.9H1.1z"
  }));
};

CaretUp.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 10"
};

require("./Dropdown.css");

var styles = {
  "toggle": "Dropdown__toggle___2c6Sb",
  "dropdown-menu": "Dropdown__dropdown-menu___ntYVM",
  "default": "Dropdown__default___1E1aM",
  "caret": "Dropdown__caret___3cXcc"
};
var context = createContext({
  toggle: false,
  toggleMenu: function toggleMenu() {}
});
var Provider = context.Provider,
    Consumer = context.Consumer;

var DropdownToggle = function DropdownToggle(_ref) {
  var className = _ref.className,
      className_active = _ref.className_active,
      children = _ref.children,
      label = _ref.label,
      labelledBy = _ref.labelledBy;
  return React.createElement(Consumer, null, function (_ref2) {
    var toggle = _ref2.toggle,
        toggleMenu = _ref2.toggleMenu;
    var composed_className = classnames(styles.toggle, className, toggle && className_active);
    return React.createElement("button", {
      "aria-label": label,
      "aria-labelledby": labelledBy,
      "aria-expanded": toggle,
      type: "button",
      className: composed_className,
      onClick: toggleMenu
    }, children);
  });
};

DropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  className_active: PropTypes.string,
  label: PropTypes.string,
  labelledBy: PropTypes.string
};

var DropdownMenu = function DropdownMenu(_ref3) {
  var className = _ref3.className,
      className_caret = _ref3.className_caret,
      theme = _ref3.theme,
      children = _ref3.children;
  return React.createElement(Consumer, null, function (_ref4) {
    var toggle = _ref4.toggle,
        toggleMenu = _ref4.toggleMenu;
    return toggle && React.createElement(DropdownMenuWrapper, {
      className: className,
      className_caret: className_caret,
      theme: theme,
      toggle: toggle,
      toggleMenu: toggleMenu
    }, children);
  });
};

DropdownMenu.Theme = {
  NONE: 'none',
  DEFAULT: 'default'
};
DropdownMenu.propTypes = {
  theme: PropTypes.oneOf(Object.values(DropdownMenu.Theme)),
  children: PropTypes.node,
  className: PropTypes.string,
  className_caret: PropTypes.string
};

var DropdownMenuWrapper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropdownMenuWrapper, _PureComponent);

  function DropdownMenuWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMenuWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMenuWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (!_this.container.contains(e.target)) {
        _this.props.toggleMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'Escape' && _this.props.toggle) {
        _this.props.toggleMenu();
      }
    });

    return _this;
  }

  _createClass(DropdownMenuWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props) {
      if (this.props.toggle !== prev_props.toggle) {
        if (this.props.toggle) {
          document.addEventListener('click', this.handleClickOutside);
          document.addEventListener('keydown', this.handleKeyDown);
        } else {
          document.removeEventListener('click', this.handleClickOutside);
          document.removeEventListener('keydown', this.handleKeyDown);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          className_caret = _this$props.className_caret,
          theme = _this$props.theme,
          children = _this$props.children;
      var no_theme = theme === DropdownMenu.Theme.NONE;
      var composed_className = classnames(className, styles['dropdown-menu'], !no_theme && styles[theme]);
      return React.createElement("div", {
        ref: function ref(_ref5) {
          return _this2.container = _ref5;
        },
        className: composed_className
      }, !no_theme && React.createElement(CaretUp, {
        className: classnames(styles.caret, className_caret)
      }), children);
    }
  }]);

  return DropdownMenuWrapper;
}(PureComponent);

_defineProperty(DropdownMenuWrapper, "propTypes", {
  theme: PropTypes.oneOf(Object.values(DropdownMenu.Theme)),
  children: PropTypes.node,
  className: PropTypes.string,
  className_caret: PropTypes.string,
  toggle: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired
});

_defineProperty(DropdownMenuWrapper, "defaultProps", {
  theme: DropdownMenu.Theme.DEFAULT
});

var Dropdown =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(Dropdown, _PureComponent2);

  function Dropdown() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, Dropdown);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      toggle: false
    });

    _defineProperty(_assertThisInitialized(_this3), "toggleMenu", function () {
      _this3.setState({
        toggle: !_this3.state.toggle
      });
    });

    return _this3;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: {
          toggle: this.state.toggle,
          toggleMenu: this.toggleMenu
        }
      }, this.props.children);
    }
  }]);

  return Dropdown;
}(PureComponent);

_defineProperty(Dropdown, "propTypes", {
  children: PropTypes.node
});

export default Dropdown;
export { DropdownToggle, DropdownMenu };
//# sourceMappingURL=Dropdown.js.map