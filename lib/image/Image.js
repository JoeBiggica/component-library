import "core-js/modules/es6.function.name";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

require("./Image.css");

var styles = {
  "size-container": "Image__size-container___1F01j",
  "image-container": "Image__image-container___3XUvb",
  "logo-light": "Image__logo-light___1o9eH",
  "logo-dark": "Image__logo-dark___gBP8T",
  "loaded": "Image__loaded___2w56Y",
  "image": "Image__image___6wPci",
  "fadein": "Image__fadein___agl3V",
  "fit": "Image__fit___1uHCx",
  "cover": "Image__cover___2NcXy",
  "lock-ratio": "Image__lock-ratio___s5qTP"
};
var FillMode = {
  EXACT: 'exact',
  FIT: 'fit',
  COVER: 'cover'
};
var Placeholder = {
  LOGO_LIGHT: 'logo-light',
  LOGO_DARK: 'logo-dark'
};

var Image = /*#__PURE__*/function (_PureComponent) {
  _inherits(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function () {
      _this.setState({
        loaded: true
      });
    });

    _this.state = {
      loaded: false,
      src: _this.props.src
    };
    return _this;
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          alt = _this$props.alt,
          aspect_ratio = _this$props.aspect_ratio,
          fill_mode = _this$props.fill_mode,
          placeholder = _this$props.placeholder,
          forwarded_ref = _this$props.forwarded_ref,
          is_amp = _this$props.is_amp;
      var _this$state = this.state,
          src = _this$state.src,
          loaded = _this$state.loaded;
      var container_style = aspect_ratio ? {
        height: 0,
        paddingBottom: "".concat(1 / aspect_ratio * 100, "%")
      } : undefined;
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        style: style,
        ref: forwarded_ref
      }, /*#__PURE__*/React.createElement("div", {
        className: styles['size-container']
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['image-container'], aspect_ratio && styles['lock-ratio'], placeholder && styles[placeholder], loaded && styles['loaded']),
        style: container_style
      }, is_amp ? src && /*#__PURE__*/React.createElement("amp-img", {
        key: src,
        className: classnames(styles['image'], styles[fill_mode]),
        alt: alt,
        src: src,
        title: alt,
        onLoad: this.handleImageLoad,
        layout: "fill"
      }) : src && /*#__PURE__*/React.createElement("img", {
        key: src,
        className: classnames(styles['image'], styles[fill_mode]),
        src: src,
        alt: alt,
        title: alt,
        onLoad: this.handleImageLoad
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.src !== state.src) {
        return {
          src: props.src,
          loaded: false
        };
      }

      return null;
    }
  }]);

  return Image;
}(PureComponent);

_defineProperty(Image, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  is_amp: PropTypes.bool,
  alt: PropTypes.string,
  aspect_ratio: PropTypes.number,
  fill_mode: PropTypes.string,
  placeholder: PropTypes.oneOf([false].concat(_toConsumableArray(Object.values(Placeholder)))),
  forwarded_ref: PropTypes.object
});

_defineProperty(Image, "defaultProps", {
  fill_mode: FillMode.EXACT,
  placeholder: Placeholder.LOGO_LIGHT,
  is_amp: false
});

_defineProperty(Image, "FillMode", FillMode);

_defineProperty(Image, "Placeholder", Placeholder);

export default Image;
//# sourceMappingURL=Image.js.map