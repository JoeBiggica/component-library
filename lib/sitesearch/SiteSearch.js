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

import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import TextInput from "../textinput";

require("./SiteSearch.css");

var styles = {
  "input": "SiteSearch__input___3j4ym"
};
var context = createContext({
  opened: false
});
var Provider = context.Provider,
    Consumer = context.Consumer;

var SearchField = function SearchField(_ref) {
  var className = _ref.className,
      style = _ref.style,
      placeholder = _ref.placeholder,
      color = _ref.color,
      auto_focus = _ref.auto_focus;
  return React.createElement(Consumer, null, function (_ref2) {
    var opened = _ref2.opened,
        onSubmit = _ref2.onSubmit;
    return React.createElement("form", {
      className: className,
      style: style,
      action: "/search/news",
      onSubmit: onSubmit
    }, React.createElement(TextInput, {
      className: styles['input'],
      name: "blob",
      placeholder: placeholder,
      auto_focus: auto_focus,
      color: color
    }));
  });
};

SearchField.Color = TextInput.Color;
SearchField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  auto_focus: PropTypes.bool
}; // https://en.wikipedia.org/wiki/Search_box

var SiteSearch =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SiteSearch, _PureComponent);

  function SiteSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {//e.preventDefault();
    });

    return _this;
  }

  _createClass(SiteSearch, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: {
          opened: false,
          onSubmit: this.handleSubmit
        }
      }, this.props.children);
    }
  }]);

  return SiteSearch;
}(PureComponent);

_defineProperty(SiteSearch, "propTypes", {
  children: PropTypes.node
});

export default SiteSearch;
export { SearchField };
//# sourceMappingURL=SiteSearch.js.map