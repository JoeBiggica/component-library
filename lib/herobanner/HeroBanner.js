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

require("./HeroBanner.css");

var styles = {};
var HeroHeight = {
  FULL: 'full',
  THREE_QUATER: 'three-quater',
  HALF: 'half',
  AUTO: 'auto'
};
var TextPosition = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CENTER: 'center'
};
var ButtonDirection = {
  ROW: 'row',
  COLUMN: 'column'
};
var BackgroundPosition = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CENTER: 'center'
};
var Gradient = {
  TOP: 'top',
  BOTTOM: 'bottom'
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

    _defineProperty(_assertThisInitialized(_this), "getBackground", function (background_image, gradient) {
      return "url(".concat(background_image, ")");
    });

    _defineProperty(_assertThisInitialized(_this), "renderButton", function (button, index) {
      var button_container_classname = styles('button-container', {
        'border': _this.props.button_border,
        'column': _this.props.button_direction === 'column',
        'row': _this.props.button_direction === 'row'
      });
      var button_classname = styles('button', {
        'border': _this.props.button_border
      });
      return /*#__PURE__*/React.createElement("li", {
        className: button_container_classname
      }, button.label && /*#__PURE__*/React.createElement("span", {
        className: styles('label')
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
          text_position = _this$props.text_position,
          buttons = _this$props.buttons,
          button_border = _this$props.button_border,
          image = _this$props.image,
          background_image = _this$props.background_image,
          background_position = _this$props.background_position,
          hero_height = _this$props.hero_height,
          gradient = _this$props.gradient;
      var container_classname = styles('container', {
        'justify-top': text_position === 'top',
        'justify-bottom': text_position === 'bottom',
        'full': hero_height === 'full',
        'three-quater': hero_height === 'three-quater',
        'half': hero_height === 'half',
        'auto': hero_height === 'auto'
      });
      var background_style = {
        backgroundImage: background_image && this.getBackground(background_image, gradient),
        backgroundPosition: background_position && background_position
      };
      var text_container_classname = styles('text-container', 'parallax-layer', 'parallax-base', {
        'border': title_border
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(container_classname, className),
        style: background_style
      }, /*#__PURE__*/React.createElement("div", {
        className: text_container_classname
      }, /*#__PURE__*/React.createElement("h1", {
        className: styles('title')
      }, this.props.title)), buttons && /*#__PURE__*/React.createElement("ul", {
        className: styles('buttons-container')
      }, buttons.map(this.renderButton)), image && /*#__PURE__*/React.createElement("div", {
        className: styles('image-container'),
        onClick: image.onClick
      }, /*#__PURE__*/React.createElement("img", {
        className: styles('image'),
        src: image.src
      })));
    }
  }]);

  return HeroBanner;
}(PureComponent);

_defineProperty(HeroBanner, "propTypes", {
  className: PropTypes.string,
  title: PropTypes.string,
  title_border: PropTypes.bool,
  text_position: PropTypes.oneOf(Object.values(TextPosition)),
  buttons: PropTypes.array,
  button_border: PropTypes.bool,
  button_direction: PropTypes.string,
  image: PropTypes.object,
  background_image: PropTypes.string,
  background_position: PropTypes.oneOf(Object.values(BackgroundPosition)),
  hero_height: PropTypes.oneOf(Object.values(HeroHeight)),
  gradient: PropTypes.oneOf(Object.values(Gradient))
});

_defineProperty(HeroBanner, "defaultProps", {
  button_direction: ButtonDirection.ROW,
  hero_height: HeroHeight.FULL
});

_defineProperty(HeroBanner, "HeroHeight", HeroHeight);

_defineProperty(HeroBanner, "TextPosition", TextPosition);

_defineProperty(HeroBanner, "ButtonDirection", ButtonDirection);

_defineProperty(HeroBanner, "BackgroundPosition", BackgroundPosition);

_defineProperty(HeroBanner, "Gradient", Gradient);

export default HeroBanner;
//# sourceMappingURL=HeroBanner.js.map