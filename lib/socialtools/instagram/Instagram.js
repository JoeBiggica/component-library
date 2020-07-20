import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Color from "../Color";

require("../SocialTools.css");

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

function urlClickHandler(url) {
  return function () {
    window.open(url, '_blank');
  };
}

function Instagram(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      url = _ref.url;
  var composed_className = classnames(styles.icon, styles.instagram, styles[color], borderless ? styles.borderless : undefined, className);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "Instagram",
    type: "button",
    className: composed_className,
    onClick: urlClickHandler(url)
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4.7c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.1c0-.6-.1-1.2-.3-1.7-.4-.9-1.1-1.7-2-2C11 .2 10.5.1 9.9 0H4.1C3.5.1 3 .2 2.4.4c-.9.4-1.7 1.1-2 2C.2 3 .1 3.5 0 4.1v5.8c0 .6.1 1.2.3 1.7.4.9 1.1 1.7 2 2 .7.2 1.2.3 1.8.4h5.8c.6 0 1.2-.1 1.7-.3.9-.4 1.7-1.1 2-2 .2-.5.3-1.1.3-1.7V7.1c0-1.9.1-2.2.1-3zM10.6 7c0 2-1.6 3.6-3.6 3.6S3.4 9 3.4 7 5 3.4 7 3.4 10.6 5 10.6 7zm1-3.7c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.4-.1.8.3.8.8z"
  })));
}

Instagram.Color = Color;
Instagram.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  url: PropTypes.string
};
Instagram.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
};
export default Instagram;
//# sourceMappingURL=Instagram.js.map