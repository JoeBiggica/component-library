import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import CSSTransition from 'react-transition-group/CSSTransition';
import TextLabel from "../textlabel";

require("./Spinner.css");

var styles = {
  "container": "Spinner__container___72LOd",
  "icon-container": "Spinner__icon-container___YSqEe",
  "icon": "Spinner__icon___1K_bY",
  "spinner": "Spinner__spinner___Ihxn4",
  "white": "Spinner__white___fq5TM",
  "orange": "Spinner__orange____BRLG",
  "text": "Spinner__text___2EofX",
  "appear": "Spinner__appear___fjVQy",
  "enter": "Spinner__enter___3TL-v",
  "appear-active": "Spinner__appear-active___3jbjd",
  "enter-active": "Spinner__enter-active___3saMt",
  "enter-done": "Spinner__enter-done___2CjAL",
  "exit": "Spinner__exit___T1GKA",
  "exit-active": "Spinner__exit-active___1pHyq",
  "exit-done": "Spinner__exit-done___2b4Qz"
};
var Color = {
  WHITE: 'white',
  ORANGE: 'orange'
};

var Spinner =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  _createClass(Spinner, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!props.show) {
        return {
          transition_in: false
        };
      }

      return null;
    }
  }]);

  function Spinner(props) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spinner).call(this, props));
    _this.state = {
      transition_in: false
    };
    var wait = 100;
    _this.deferred_show = debounce(function () {
      _this.setState({
        transition_in: true
      });
    }, wait);
    return _this;
  }

  _createClass(Spinner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.show) {
        this.deferred_show();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props) {
      if (prev_props.show !== this.props.show) {
        if (this.props.show) {
          this.deferred_show();
        } else {
          this.deferred_show.cancel();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deferred_show.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          text_className = _this$props.text_className,
          style = _this$props.style,
          text_style = _this$props.text_style,
          color = _this$props.color,
          text = _this$props.text;
      return React.createElement(CSSTransition, {
        timeout: 500,
        in: this.state.transition_in,
        mountOnEnter: true,
        unmountOnExit: true,
        classNames: {
          appear: styles['appear'],
          appearActive: styles['appear-active'],
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          enterDone: styles['enter-done'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
          exitDone: styles['exit-done']
        }
      }, React.createElement("div", {
        className: classnames(styles['container'], className),
        style: style
      }, React.createElement("div", {
        className: styles['icon-container']
      }, React.createElement("svg", {
        className: classnames(styles['icon'], styles[color]),
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 100 100"
      }, React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "40"
      }))), text && React.createElement(TextLabel, {
        className: classnames(styles['text'], text_className),
        style: text_style,
        text: text,
        font: TextLabel.Font.REGULAR,
        color: color === Color.WHITE ? TextLabel.Color.WHITE : TextLabel.Color.GRAY,
        tag: "span"
      })));
    }
  }]);

  return Spinner;
}(PureComponent);

_defineProperty(Spinner, "propTypes", {
  show: PropTypes.bool,
  className: PropTypes.string,
  text_className: PropTypes.string,
  style: PropTypes.object,
  text_style: PropTypes.object,
  color: PropTypes.oneOf(Object.values(Color)),
  text: PropTypes.string
});

_defineProperty(Spinner, "defaultProps", {
  show: true,
  color: Color.ORANGE
});

_defineProperty(Spinner, "Color", Color);

export { Spinner as default };
//# sourceMappingURL=Spinner.js.map