import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.function.name";

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
import TextLabel from "../../textlabel";
import Tabs from "../../tabs";
import TickerTape from "../tickertape";

require("./TabbedTickerTapes.css");

var styles = {
  "tabs-container": "TabbedTickerTapes__tabs-container___IzToq",
  "sponsor-logo": "TabbedTickerTapes__sponsor-logo___1b9BQ",
  "tabs": "TabbedTickerTapes__tabs___YuiFr"
};

var TabbedTickerTapes = /*#__PURE__*/function (_PureComponent) {
  _inherits(TabbedTickerTapes, _PureComponent);

  var _super = _createSuper(TabbedTickerTapes);

  function TabbedTickerTapes() {
    var _this;

    _classCallCheck(this, TabbedTickerTapes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      active_tab_index: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (item) {
      _this.props.onTabClick(item);

      var active_tab_index = _this.props.tabs.indexOf(item);

      _this.setState({
        active_tab_index: active_tab_index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectChange", function (select) {
      var index = select.target.selectedIndex;
      var selected_tab = _this.props.tabs[index];
      var item = {
        id: selected_tab.id,
        name: selected_tab.name
      };

      _this.props.onTabClick(item);

      _this.setState({
        active_tab_index: index
      });
    });

    return _this;
  }

  _createClass(TabbedTickerTapes, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          tabs = _this$props.tabs,
          quote_lists = _this$props.quote_lists,
          links = _this$props.links,
          scroll = _this$props.scroll,
          dark_mode = _this$props.dark_mode,
          dart_zone = _this$props.dart_zone,
          adstest = _this$props.adstest;
      var tab_index = this.state.active_tab_index;
      var quotes = quote_lists[tab_index] || quote_lists[0];
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: styles['tabs-container']
      }, tabs && /*#__PURE__*/React.createElement(Tabs, {
        className: styles['tabs'],
        items: tabs,
        initial_index: tab_index,
        font: "SMALL_ALL_CAPS_NO_SPACING",
        current_color: "BLACK",
        track_position: "top",
        triangle_marker: true,
        dark_mode: dark_mode,
        onClick: this.handleTabClick
      })), quotes && /*#__PURE__*/React.createElement(TickerTape, {
        key: "ticker-tape-".concat(tab_index),
        className: styles['tape-container'],
        quotes: quotes,
        links: links
      }));
    }
  }]);

  return TabbedTickerTapes;
}(PureComponent);

_defineProperty(TabbedTickerTapes, "propTypes", {
  className: PropTypes.className,
  style: PropTypes.object,
  quote_lists: PropTypes.array,
  tabs: PropTypes.array,
  links: PropTypes.bool,
  dark_mode: PropTypes.bool,
  dart_zone: PropTypes.string,
  adstest: PropTypes.string,
  onTabClick: PropTypes.func
});

_defineProperty(TabbedTickerTapes, "defaultProps", {
  links: true,
  quote_lists: [],
  onTabClick: function onTabClick() {}
});

export default TabbedTickerTapes;
//# sourceMappingURL=TabbedTickerTapes.js.map