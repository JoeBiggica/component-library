import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

require("./BackdropImage.css");

var styles = {
  "size-container": "BackdropImage__size-container___9wRXo",
  "logo-light": "BackdropImage__logo-light___2Icv1",
  "logo-dark": "BackdropImage__logo-dark___KO1Cd",
  "image": "BackdropImage__image___p3Fxq",
  "fadein": "BackdropImage__fadein___3aDrx",
  "top-center": "BackdropImage__top-center___1GxVc",
  "center": "BackdropImage__center___3qH3A",
  "bottom-center": "BackdropImage__bottom-center___3KH8P",
  "exact": "BackdropImage__exact___3a1FV",
  "fit": "BackdropImage__fit___KgFHM",
  "cover": "BackdropImage__cover___2Rn8Y"
};
var FillMode = {
  EXACT: 'exact',
  FIT: 'fit',
  COVER: 'cover'
};
var FillPosition = {
  TOP_CENTER: 'top-center',
  CENTER: 'center',
  BOTTOM_CENTER: 'bottom-center'
};
var Placeholder = {
  LOGO_LIGHT: 'logo-light',
  LOGO_DARK: 'logo-dark'
};

var BackdropImage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BackdropImage, _PureComponent);

  function BackdropImage(props) {
    var _this;

    _classCallCheck(this, BackdropImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackdropImage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function (e) {
      _this.setState({
        loaded_src: e.target.currentSrc || e.target.src,
        loaded: true
      });
    });

    _this.state = {
      src: _this.props.src,
      srcSet: _this.props.srcSet,
      loaded_src: null,
      loaded: false
    };
    return _this;
  }

  _createClass(BackdropImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          aspect_ratio = _this$props.aspect_ratio,
          fill_mode = _this$props.fill_mode,
          fill_position = _this$props.fill_position,
          placeholder = _this$props.placeholder,
          forwarded_ref = _this$props.forwarded_ref;
      var _this$state = this.state,
          src = _this$state.src,
          srcSet = _this$state.srcSet,
          loaded_src = _this$state.loaded_src,
          loaded = _this$state.loaded;
      var size_container_style = aspect_ratio ? {
        height: 0,
        paddingBottom: "".concat(1 / aspect_ratio * 100, "%")
      } : undefined;
      var image_style = loaded_src ? {
        backgroundImage: "url(".concat(loaded_src, ")")
      } : undefined;
      return React.createElement("div", {
        className: className,
        style: style,
        ref: forwarded_ref
      }, React.createElement("div", {
        className: classnames(styles['size-container'], placeholder && styles[placeholder]),
        style: size_container_style
      }, src && React.createElement("img", {
        key: src,
        src: src,
        srcSet: srcSet,
        onLoad: this.handleImageLoad
      }), loaded && React.createElement("div", {
        className: classnames(styles['image'], styles[fill_mode], styles[fill_position]),
        style: image_style
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.src !== state.src || props.srcSet !== state.srcSet) {
        return {
          src: props.src,
          srcSet: props.srcSet,
          loaded_src: null,
          loaded: false
        };
      }

      return null;
    }
  }]);

  return BackdropImage;
}(PureComponent);

_defineProperty(BackdropImage, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  aspect_ratio: PropTypes.number,
  fill_mode: PropTypes.string,
  fill_position: PropTypes.string,
  placeholder: PropTypes.oneOf([false].concat(_toConsumableArray(Object.values(Placeholder)))),
  forwarded_ref: PropTypes.object
});

_defineProperty(BackdropImage, "defaultProps", {
  fill_mode: FillMode.COVER,
  fill_position: FillPosition.TOP_CENTER,
  placeholder: Placeholder.LOGO_LIGHT
});

_defineProperty(BackdropImage, "FillMode", FillMode);

_defineProperty(BackdropImage, "FillPosition", FillPosition);

_defineProperty(BackdropImage, "Placeholder", Placeholder);

export default BackdropImage;
//# sourceMappingURL=BackdropImage.js.map