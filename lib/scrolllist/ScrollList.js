import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.values";
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import NavButton from "../navbutton";

require("./ScrollList.css");

var styles = {
  "container": "ScrollList__container___51dmZ",
  "scroller": "ScrollList__scroller___2cRTV",
  "left": "ScrollList__left___1QCzV",
  "right": "ScrollList__right___36Ery",
  "center": "ScrollList__center___2Mxiy",
  "prev-button": "ScrollList__prev-button___12F90",
  "next-button": "ScrollList__next-button___1mFMB"
};
var alignment = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
};

var ScrollList = /*#__PURE__*/function (_PureComponent) {
  _inherits(ScrollList, _PureComponent);

  var _super = _createSuper(ScrollList);

  function ScrollList(props) {
    var _this;

    _classCallCheck(this, ScrollList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "supportSmoothScroll", function () {
      return 'scrollBehavior' in document.documentElement.style;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollIntoView", function (item_ref) {
      if (_this.supportSmoothScroll()) {
        item_ref.scrollIntoView({
          inline: 'center',
          block: 'nearest',
          behavior: 'smooth'
        });
      } else {
        var scroller = _this.scroller_ref.current;

        if (window.scrollTo()) {
          scroller.scrollTo(item_ref.offsetLeft - scroller.clientWidth / 2 + item_ref.clientWidth / 2, 0);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollBy", function (amount) {
      var scroller = _this.scroller_ref.current;

      if (_this.supportSmoothScroll()) {
        scroller.scrollBy({
          top: 0,
          left: amount,
          behavior: 'smooth'
        });
      } else {
        scroller.scrollLeft += amount;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getStepDistance", function () {
      var item_width = _this.scroller_ref.current.scrollWidth / _this.props.items.length;
      var half_scroller_width = _this.scroller_ref.current.clientWidth / 2;
      return Math.max(item_width, half_scroller_width);
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      _this.scrollBy(_this.getStepDistance());
    });

    _defineProperty(_assertThisInitialized(_this), "prevStep", function () {
      _this.scrollBy(-_this.getStepDistance());
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scroller = _this.scroller_ref.current;
      var pos = scroller.scrollLeft;
      var left_bound = 0;
      var right_bound = scroller.scrollWidth - scroller.clientWidth;
      var reached_left_bound = pos <= left_bound;
      var reached_right_bound = pos >= right_bound;

      _this.setState({
        reached_left_bound: reached_left_bound,
        reached_right_bound: reached_right_bound
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item, index) {
      var current = index === _this.props.current_item_index;
      return /*#__PURE__*/React.createElement("li", {
        key: "item-".concat(index),
        className: _this.props.item_className,
        ref: function ref(_ref) {
          return _this.item_refs[index] = _ref;
        }
      }, _this.props.renderItem(item, index, current));
    });

    _this.state = {
      reached_left_bound: true,
      reached_right_bound: true
    };
    _this.scroller_ref = React.createRef();
    _this.item_refs = [];
    _this.debouncedHandleScroll = debounce(_this.handleScroll, 100, {
      leading: false,
      trailing: true
    });
    return _this;
  }

  _createClass(ScrollList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resize_observer = new window.ResizeObserver(this.debouncedHandleScroll);
      this.resize_observer.observe(this.scroller_ref.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.debouncedHandleScroll.cancel();
      this.resize_observer.disconnect();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props) {
      if (prev_props.current_item_index !== this.props.current_item_index) {
        var item_ref = this.item_refs[this.props.current_item_index];

        if (item_ref) {
          this.scrollIntoView(item_ref);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          prev_button_className = _this$props.prev_button_className,
          next_button_className = _this$props.next_button_className,
          button_theme = _this$props.button_theme,
          button_size = _this$props.button_size,
          alignment = _this$props.alignment,
          items = _this$props.items,
          children = _this$props.children;
      var _this$state = this.state,
          reached_left_bound = _this$state.reached_left_bound,
          reached_right_bound = _this$state.reached_right_bound;
      return /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement("div", {
        className: styles['container']
      }, /*#__PURE__*/React.createElement(NavButton, {
        className: classnames(styles['prev-button'], prev_button_className),
        direction: NavButton.Direction.LEFT,
        theme: button_theme,
        size: button_size,
        hidden: reached_left_bound,
        onClick: this.prevStep
      }), /*#__PURE__*/React.createElement(NavButton, {
        className: classnames(styles['next-button'], next_button_className),
        direction: NavButton.Direction.RIGHT,
        theme: button_theme,
        size: button_size,
        hidden: reached_right_bound,
        onClick: this.nextStep
      }), /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['scroller'], styles[alignment]),
        ref: this.scroller_ref,
        onScroll: this.debouncedHandleScroll
      }, /*#__PURE__*/React.createElement("ul", null, items.map(this.renderItem), children))));
    }
  }]);

  return ScrollList;
}(PureComponent);

_defineProperty(ScrollList, "Alignment", alignment);

_defineProperty(ScrollList, "ButtonTheme", NavButton.Theme);

_defineProperty(ScrollList, "propTypes", {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  item_className: PropTypes.string,
  alignment: PropTypes.oneOf(Object.values(alignment)),
  current_item_index: PropTypes.number,
  button_theme: PropTypes.string,
  button_size: PropTypes.string,
  prev_button_className: PropTypes.string,
  next_button_className: PropTypes.string
});

_defineProperty(ScrollList, "defaultProps", {
  alignment: alignment.LEFT,
  current_item_index: -1
});

export default ScrollList;
//# sourceMappingURL=ScrollList.js.map