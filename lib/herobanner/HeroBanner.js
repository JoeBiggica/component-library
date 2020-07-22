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
import TextLabel from "../textlabel";

require("./HeroBanner.css");

var styles = {
  "container": "HeroBanner__container___fYWwV",
  "justify-top": "HeroBanner__justify-top___3VB1M",
  "text-container": "HeroBanner__text-container___3UaLg",
  "justify-bottom": "HeroBanner__justify-bottom___l4RcU",
  "full": "HeroBanner__full___1ZTji",
  "three-quater": "HeroBanner__three-quater___1uIgj",
  "half": "HeroBanner__half___1V9GZ",
  "auto": "HeroBanner__auto___3Alws",
  "border": "HeroBanner__border___1PvtJ",
  "gradient-top": "HeroBanner__gradient-top___1i_XK",
  "gradient-bottom": "HeroBanner__gradient-bottom___sleIu",
  "title": "HeroBanner__title___2n_0g",
  "buttons-container": "HeroBanner__buttons-container___2bvpJ",
  "button-container": "HeroBanner__button-container___2xSm3",
  "row": "HeroBanner__row___1TEvL",
  "label": "HeroBanner__label___2R3I0",
  "button": "HeroBanner__button___1GnDi",
  "image-container": "HeroBanner__image-container___3HA7n",
  "background-gradient": "HeroBanner__background-gradient___1zbjw",
  "top": "HeroBanner__top___2STCY",
  "bottom": "HeroBanner__bottom___3gLn9"
};
var HeroHeight = {
  FULL: 'full',
  THREE_QUATER: 'three-quater',
  HALF: 'half',
  AUTO: 'auto'
};
var TextPosition = {
  BOTTOM: 'bottom',
  TOP: 'top',
  CENTER: 'center'
};
var TextGradient = {
  BOTTOM: 'bottom',
  TOP: 'top',
  NONE: null
};
var ButtonDirection = {
  ROW: 'row',
  COLUMN: 'column'
};
var BackgroundPosition = {
  CENTER: 'center',
  TOP: 'top',
  BOTTOM: 'bottom'
};
var BackgroundGradient = {
  NONE: null,
  BOTTOM: 'bottom',
  TOP: 'top'
};

var HeroBanner = /*#__PURE__*/function (_PureComponent) {
  _inherits(HeroBanner, _PureComponent);

  var _super = _createSuper(HeroBanner);

  function HeroBanner() {
    var _this;

    _classCallCheck(this, HeroBanner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderButton", function (button, index) {
      var button_container_classname = classnames(styles['button-container'], styles[_this.props.button_border && 'border'], styles[_this.props.button_direction === 'column' && 'column'], styles[_this.props.button_direction === 'row' && 'row']);
      var button_classname = classnames(styles['button'], styles[_this.props.button_border && 'border']);
      return /*#__PURE__*/React.createElement("li", {
        className: button_container_classname
      }, button.label && /*#__PURE__*/React.createElement("span", {
        className: classnames(styles['label'])
      }, button.label), /*#__PURE__*/React.createElement("div", {
        className: button_classname
      }, /*#__PURE__*/React.createElement("a", {
        href: button.url,
        target: button.target,
        onClick: button.onClick
      }, button.text)));
    });

    return _this;
  }

  _createClass(HeroBanner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          title_border = _this$props.title_border,
          text_gradient = _this$props.text_gradient,
          text_position = _this$props.text_position,
          buttons = _this$props.buttons,
          button_border = _this$props.button_border,
          image = _this$props.image,
          background_image = _this$props.background_image,
          background_position = _this$props.background_position,
          background_gradient = _this$props.background_gradient,
          hero_height = _this$props.hero_height;
      var container_classname = classnames(className, styles['container'], styles[text_position === 'top' && 'justify-top'], styles[text_position === 'bottom' && 'justify-bottom'], styles[hero_height === 'full' && 'full'], styles[hero_height === 'three-quater' && 'three-quater'], styles[hero_height === 'half' && 'half'], styles[hero_height === 'auto' && 'auto']);
      var background_style = {
        backgroundImage: background_image && "url(".concat(background_image, ")"),
        backgroundPosition: background_position && background_position
      };
      var text_container_classname = classnames(styles['text-container'], styles[title_border && 'border'], styles[text_gradient && "gradient-".concat(text_gradient)]);
      var background_gradient_classname = classnames(styles['background-gradient'], styles[background_gradient === 'top' && 'top'], styles[background_gradient === 'bottom' && 'bottom']);
      return /*#__PURE__*/React.createElement("div", {
        className: container_classname,
        style: background_style
      }, title && /*#__PURE__*/React.createElement("div", {
        className: text_container_classname
      }, /*#__PURE__*/React.createElement(TextLabel, {
        className: classnames(styles['title']),
        tag: "h1",
        text: title,
        color: TextLabel.Color.WHITE,
        font: TextLabel.Font.AVENIR_BOLD
      })), buttons && /*#__PURE__*/React.createElement("ul", {
        className: classnames(styles['buttons-container'])
      }, buttons.map(this.renderButton)), image && /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['image-container']),
        onClick: image.onClick
      }, /*#__PURE__*/React.createElement("img", {
        className: classnames(styles['image']),
        src: image.src
      })), background_gradient && /*#__PURE__*/React.createElement("div", {
        className: background_gradient_classname
      }));
    }
  }]);

  return HeroBanner;
}(PureComponent);

_defineProperty(HeroBanner, "propTypes", {
  className: PropTypes.string,
  title: PropTypes.string,
  title_border: PropTypes.bool,
  text_position: PropTypes.oneOf(Object.values(TextPosition)),
  text_gradient: PropTypes.oneOf(Object.values(TextGradient)),
  buttons: PropTypes.array,
  button_border: PropTypes.bool,
  button_direction: PropTypes.string,
  image: PropTypes.object,
  background_image: PropTypes.string,
  background_position: PropTypes.oneOf(Object.values(BackgroundPosition)),
  hero_height: PropTypes.oneOf(Object.values(HeroHeight)),
  background_gradient: PropTypes.oneOf(Object.values(BackgroundGradient))
});

_defineProperty(HeroBanner, "defaultProps", {
  background_position: BackgroundPosition.CENTER,
  text_position: TextPosition.BOTTOM,
  text_gradient: TextGradient.BOTTOM,
  button_direction: ButtonDirection.ROW,
  hero_height: HeroHeight.FULL,
  background_gradient: BackgroundGradient.NONE
});

_defineProperty(HeroBanner, "HeroHeight", HeroHeight);

_defineProperty(HeroBanner, "TextPosition", TextPosition);

_defineProperty(HeroBanner, "TextGradient", TextGradient);

_defineProperty(HeroBanner, "ButtonDirection", ButtonDirection);

_defineProperty(HeroBanner, "BackgroundPosition", BackgroundPosition);

_defineProperty(HeroBanner, "BackgroundGradient", BackgroundGradient);

export default HeroBanner;
//# sourceMappingURL=HeroBanner.js.map