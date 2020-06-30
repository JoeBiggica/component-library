import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";
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
import TextLabel from "../../textlabel";
import Digits from "../digits";
import ScrollList from "../../scrolllist";
import classnames from 'classnames';

require("./TickerTape.css");

var styles = {
  "scroll-list": "TickerTape__scroll-list___3ty0a",
  "quote-item": "TickerTape__quote-item___3xhXA",
  "button": "TickerTape__button___16ka7",
  "first": "TickerTape__first___241XZ",
  "name": "TickerTape__name___pqhGd",
  "last": "TickerTape__last___Upjpl",
  "net-change": "TickerTape__net-change___3yTRE",
  "percent-change": "TickerTape__percent-change___E5OqS"
};

var TickerTape =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TickerTape, _PureComponent);

  function TickerTape() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TickerTape);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TickerTape)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (quote, index) {
      var fixed_decimals = 2;
      var last_plus_sign = false;
      var link = _this.props.links;
      var net_change = quote.net_change;
      var percent_change = quote.percent_change; // Bonds

      if (quote.yield) {
        fixed_decimals = 3;
        last_plus_sign = true;
        link = false;
        net_change = quote.yield_net_change;
        percent_change = quote.yield_percent_change;
      } //Currencies


      if (quote.symbol) {
        fixed_decimals = 4;
      }

      return React.createElement("div", {
        key: "quote-".concat(index),
        className: styles['quote-item']
      }, React.createElement(TextLabel, {
        className: styles['name'],
        text: quote.name || quote.ric,
        font: TextLabel.Font.MEDIUM,
        color: link ? TextLabel.Color.BLACK_TO_ORANGE : TextLabel.Color.BLACK,
        tag: link ? 'a' : 'span',
        href: link ? "/quote/".concat(quote.symbol || quote.ric) : undefined
      }), React.createElement(Digits, {
        className: styles['last'],
        value: quote.last || quote.yield,
        fixed_decimals: fixed_decimals,
        plus_sign: last_plus_sign,
        color: Digits.Color.BLACK,
        font: Digits.Font.REGULAR
      }), React.createElement(Digits, {
        className: styles['percent-change'],
        value: percent_change,
        change_color: true,
        fixed_decimals: fixed_decimals,
        unit: "%",
        plus_sign: true,
        color: Digits.Color.BLACK,
        font: Digits.Font.REGULAR
      }));
    });

    return _this;
  }

  _createClass(TickerTape, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          quotes = _this$props.quotes;
      return React.createElement("div", {
        className: className,
        style: style
      }, React.createElement(ScrollList, {
        className: styles['scroll-list'],
        items: quotes,
        button_theme: ScrollList.ButtonTheme.WHITE_CIRCLE,
        prev_button_className: styles['prev'],
        next_button_className: styles['next'],
        renderItem: this.renderItem
      }));
    }
  }]);

  return TickerTape;
}(PureComponent);

_defineProperty(TickerTape, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  quotes: PropTypes.array,
  links: PropTypes.bool
});

_defineProperty(TickerTape, "defaultProps", {
  links: true,
  scroll: true
});

export default TickerTape;
//# sourceMappingURL=TickerTape.js.map