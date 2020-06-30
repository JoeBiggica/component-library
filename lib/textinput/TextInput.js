import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.function.name";

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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

require("./TextInput.css");

var styles = {
  "input": "TextInput__input___3rUAP",
  "orange": "TextInput__orange___vBrTJ",
  "gray": "TextInput__gray___1mTlx",
  "black": "TextInput__black___3rakL",
  "white": "TextInput__white___30aUB"
};
var Color = {
  GRAY: 'gray',
  WHITE: 'white',
  BLACK: 'black',
  ORANGE: 'orange'
};

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  function TextInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          color = _this$props.color,
          auto_focus = _this$props.auto_focus,
          spell_check = _this$props.spell_check,
          auto_correct = _this$props.auto_correct,
          auto_complete = _this$props.auto_complete;
      return React.createElement("input", {
        className: classnames(styles['input'], styles[color], className),
        style: style,
        type: "text",
        placeholder: placeholder,
        name: name,
        autoFocus: auto_focus,
        spellCheck: spell_check.toString(),
        autoCorrect: auto_correct.toString(),
        autoComplete: auto_complete.toString()
      });
    }
  }]);

  return TextInput;
}(PureComponent);

_defineProperty(TextInput, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  auto_focus: PropTypes.bool,
  spell_check: PropTypes.bool,
  auto_correct: PropTypes.bool,
  auto_complete: PropTypes.bool
});

_defineProperty(TextInput, "defaultProps", {
  color: Color.GRAY,
  auto_focus: false,
  spell_check: false,
  auto_correct: false,
  auto_complete: false
});

_defineProperty(TextInput, "Color", Color);

export { TextInput as default };
//# sourceMappingURL=TextInput.js.map