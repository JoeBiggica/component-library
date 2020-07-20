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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LightBox from "../lightbox";

require("./Gallery.css");

var styles = {
  "image-list": "Gallery__image-list___3ILbV",
  "long-image": "Gallery__long-image___28_X3",
  "lightbox-image-container": "Gallery__lightbox-image-container___24a_f",
  "lightbox-image": "Gallery__lightbox-image___1gZJk"
};

var Gallery = /*#__PURE__*/function (_Component) {
  _inherits(Gallery, _Component);

  var _super = _createSuper(Gallery);

  function Gallery() {
    var _this;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      lightbox_active: false
    });

    _defineProperty(_assertThisInitialized(_this), "openLightBox", function (image) {
      var url = image.url,
          long_image = image.long_image;

      _this.setState({
        lightbox_active: true,
        lightbox_image: {
          url: url,
          long_image: long_image
        }
      });

      document.body.style['overflow-x'] = 'hidden';
      document.body.style['overflow-y'] = 'hidden';
    });

    _defineProperty(_assertThisInitialized(_this), "closeLightBox", function () {
      _this.setState({
        lightbox_active: false
      });

      document.body.style['overflow-x'] = '';
      document.body.style['overflow-y'] = '';
    });

    _defineProperty(_assertThisInitialized(_this), "renderLightBoxImage", function (image) {
      var url = image.url,
          long_image = image.long_image;
      var image_styles = {
        backgroundImage: "url(".concat(url, ")"),
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };

      if (long_image) {
        return /*#__PURE__*/React.createElement("div", {
          className: classnames(styles['lightbox-image-container'])
        }, /*#__PURE__*/React.createElement("img", {
          src: url,
          alt: url
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['lightbox-image-container'])
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['lightbox-image']),
        style: image_styles
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderImage", function (image, index) {
      var url = image.url,
          long_image = image.long_image;

      if (long_image) {
        var long_image_styles = {
          backgroundImage: "url(".concat(url, ")"),
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        };
        var _lightbox_image = {
          url: url,
          long_image: long_image
        };
        return /*#__PURE__*/React.createElement("div", {
          key: "image-".concat(index),
          className: classnames(styles['long-image']),
          style: long_image_styles,
          onClick: function onClick() {
            return _this.openLightBox(_lightbox_image);
          }
        });
      }

      var lightbox_image = {
        url: url
      };
      return /*#__PURE__*/React.createElement("img", {
        key: "image-".concat(index),
        src: url,
        loading: "lazy",
        onClick: function onClick() {
          return _this.openLightBox(lightbox_image);
        }
      });
    });

    return _this;
  }

  _createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) _this2.closeLightBox(); // enter

        if (e.keyCode === 27) _this2.closeLightBox(); // esc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          images = _this$props.images;
      var _this$state = this.state,
          lightbox_active = _this$state.lightbox_active,
          lightbox_image = _this$state.lightbox_image;
      return /*#__PURE__*/React.createElement("div", {
        style: style,
        className: classnames(styles['container'], className)
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['image-list'])
      }, images && images.map(this.renderImage)), lightbox_active && /*#__PURE__*/React.createElement(LightBox, {
        onClick: function onClick() {
          return _this3.closeLightBox();
        }
      }, this.renderLightBoxImage(lightbox_image)));
    }
  }]);

  return Gallery;
}(Component);

_defineProperty(Gallery, "propTypes", {
  style: PropTypes.object,
  className: PropTypes.string,
  images: PropTypes.array
});

export { Gallery as default };
//# sourceMappingURL=Gallery.js.map