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
import classnames from 'classnames';
import TextLabel from "../textlabel";
import ScrollList from "../scrolllist";

require("./Tabs.css");

var styles = {
  "container": "Tabs__container___1T9bp",
  "list": "Tabs__list___1JZ15",
  "list-item": "Tabs__list-item___2FZvy",
  "button": "Tabs__button___2KIrm",
  "prev": "Tabs__prev___2mhfN",
  "next": "Tabs__next___PXMYE",
  "name": "Tabs__name___7BvzC",
  "indicator": "Tabs__indicator___1kcFB",
  "top": "Tabs__top___3nBlt",
  "bottom": "Tabs__bottom____4y7c",
  "transition": "Tabs__transition___z8Bba",
  "triangle": "Tabs__triangle___25fQv",
  "track": "Tabs__track___1vOn-"
};

var Tabs =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleAfterTabChange", function (index) {
      var use_transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ref = _this.item_refs[index];

      if (ref) {
        _this.setState({
          use_transition: use_transition,
          indicator_x: ref.offsetLeft,
          indicator_w: ref.offsetWidth
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickTab", function (item, index) {
      _this.setState({
        current_index: index
      });

      _this.props.onClick(item, index);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item, i, current) {
      var color = current ? TextLabel.Color[_this.props.current_color] : TextLabel.Color.GRAY;
      var ariaLabel = "tab-".concat(i);
      return React.createElement("button", {
        "aria-labelledby": ariaLabel,
        key: "tab-".concat(i),
        ref: function ref(_ref) {
          return _this.item_refs[i] = _ref;
        },
        className: classnames(styles.button, _this.props.button_className),
        disabled: current,
        onClick: _this.handleClickTab.bind(_assertThisInitialized(_this), item, i)
      }, React.createElement(TextLabel, {
        className: styles.name,
        color: color,
        font: TextLabel.Font[_this.props.font],
        id: ariaLabel,
        text: item.name
      }));
    });

    _this.state = {
      current_index: props.initial_index,
      use_transition: false,
      indicator_x: 0,
      indicator_w: 0
    };
    _this.item_refs = [];
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleAfterTabChange(this.state.current_index);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props, prev_state) {
      if (prev_state.current_index !== this.state.current_index) {
        this.handleAfterTabChange(this.state.current_index, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          items = _this$props.items,
          track_position = _this$props.track_position,
          triangle_marker = _this$props.triangle_marker;
      var _this$state = this.state,
          current_index = _this$state.current_index,
          use_transition = _this$state.use_transition;
      var indicator_style = {
        width: this.state.indicator_w,
        transform: "translateX(".concat(this.state.indicator_x, "px)")
      };
      var indicator_classnames = classnames(styles.indicator, use_transition && styles.transition, track_position === 'bottom' && styles.bottom, track_position === 'top' && styles.top, triangle_marker && styles.triangle);
      var track_classnames = classnames(styles.track, track_position === 'bottom' && styles.bottom, track_position === 'top' && styles.top);
      return React.createElement("nav", {
        className: classnames(styles.container, className),
        style: style
      }, React.createElement(ScrollList, {
        className: styles.list,
        item_className: styles['list-item'],
        items: items,
        current_item_index: current_index,
        button_theme: ScrollList.ButtonTheme.WHITE_CIRCLE,
        prev_button_className: styles.prev,
        next_button_className: styles.next,
        renderItem: this.renderItem
      }, React.createElement("div", {
        className: indicator_classnames,
        style: indicator_style
      })), React.createElement("div", {
        className: track_classnames
      }));
    }
  }]);

  return Tabs;
}(PureComponent);

_defineProperty(Tabs, "propTypes", {
  initial_index: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  className: PropTypes.string,
  button_className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  current_color: PropTypes.string,
  track_position: PropTypes.string,
  triangle_marker: PropTypes.bool,
  onClick: PropTypes.func
});

_defineProperty(Tabs, "defaultProps", {
  initial_index: 0,
  font: 'MEDIUM',
  current_color: 'ORANGE',
  track_position: 'bottom',
  onClick: function onClick() {}
});

export default Tabs;
//# sourceMappingURL=Tabs.js.map