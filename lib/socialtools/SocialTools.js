import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import Facebook from "./facebook";
import Twitter from "./twitter";
import YouTube from "./youtube";
import Instagram from "./instagram";
import LinkedIn from "./linkedin";
import Rss from "./rss";
import Email from "./email";
import Link from "./link";
import Color from "./Color";

require("./SocialTools.css");

var styles = {
  "container": "SocialTools__container___3rfoZ",
  "icon": "SocialTools__icon___MYRE6",
  "borderless": "SocialTools__borderless___368d9",
  "always-gray": "SocialTools__always-gray___2pIVP",
  "gray-to-original": "SocialTools__gray-to-original___1Duya",
  "always-white": "SocialTools__always-white___2j03w",
  "white-to-original": "SocialTools__white-to-original___2tdRg",
  "white-to-orange": "SocialTools__white-to-orange___2o6Ku",
  "twitter": "SocialTools__twitter___1EoE2",
  "facebook": "SocialTools__facebook___3tojW",
  "youtube": "SocialTools__youtube___gGJFS",
  "rss": "SocialTools__rss___2Wgb-",
  "linkedin": "SocialTools__linkedin___rYZd4",
  "instagram": "SocialTools__instagram___38SVl",
  "email": "SocialTools__email___1O9y9",
  "link": "SocialTools__link___wCGCZ"
};
var Platform = {
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
  INSTAGRAM: 'instagram',
  LINKEDIN: 'linkedin',
  RSS: 'rss',
  EMAIL: 'email',
  LINK: 'link'
};

var SocialTools = /*#__PURE__*/function (_PureComponent) {
  _inherits(SocialTools, _PureComponent);

  var _super = _createSuper(SocialTools);

  function SocialTools() {
    _classCallCheck(this, SocialTools);

    return _super.apply(this, arguments);
  }

  _createClass(SocialTools, [{
    key: "renderSocialButton",
    value: function renderSocialButton(urls, share, color, borderless, platform, index) {
      var url = urls[index];
      var props = {
        key: platform,
        color: color,
        borderless: borderless,
        url: url
      };

      switch (platform) {
        case Platform.FACEBOOK:
          return /*#__PURE__*/React.createElement(Facebook, _extends({}, props, {
            share: share
          }));

        case Platform.TWITTER:
          return /*#__PURE__*/React.createElement(Twitter, _extends({}, props, {
            share: share
          }));

        case Platform.YOUTUBE:
          return /*#__PURE__*/React.createElement(YouTube, props);

        case Platform.INSTAGRAM:
          return /*#__PURE__*/React.createElement(Instagram, props);

        case Platform.LINKEDIN:
          return /*#__PURE__*/React.createElement(LinkedIn, props);

        case Platform.RSS:
          return /*#__PURE__*/React.createElement(Rss, props);

        case Platform.EMAIL:
          return /*#__PURE__*/React.createElement(Email, _extends({}, props, {
            share: share
          }));

        case Platform.LINK:
          return /*#__PURE__*/React.createElement(Link, _extends({}, props, {
            share: share
          }));

        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          urls = _this$props.urls,
          share = _this$props.share,
          color = _this$props.color,
          borderless = _this$props.borderless;
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(styles['container'], this.props.className)
      }, this.props.platforms.map(this.renderSocialButton.bind(null, urls, share, color, borderless)));
    }
  }]);

  return SocialTools;
}(PureComponent);

_defineProperty(SocialTools, "propTypes", {
  className: PropTypes.string,
  platforms: PropTypes.array.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string),
  share: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool
});

_defineProperty(SocialTools, "defaultProps", {
  urls: [],
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
});

_defineProperty(SocialTools, "Platform", Platform);

_defineProperty(SocialTools, "Color", Color);

export default SocialTools;
//# sourceMappingURL=SocialTools.js.map