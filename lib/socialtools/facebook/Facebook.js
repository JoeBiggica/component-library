import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import windowPopUp from "../windowPopUp";
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

function shareClickHandler(share) {
  var encoded_url = encodeURIComponent(share.url);
  var encoded_title = encodeURIComponent(share.title);
  var url = "https://www.facebook.com/sharer/sharer.php?u=".concat(encoded_url, "&t=").concat(encoded_title);
  return windowPopUp.bind(null, url, 600, 400);
}

function urlClickHandler(url) {
  return function () {
    window.open(url, '_blank');
  };
}

function Facebook(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      share = _ref.share,
      url = _ref.url;
  var composed_className = classnames(styles.icon, styles.facebook, styles[color], borderless ? styles.borderless : undefined, className);
  var click_handler = share ? shareClickHandler(share) : urlClickHandler(url);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "Facebook",
    type: "button",
    className: composed_className,
    onClick: click_handler
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.8 16V8.7h2.7l.4-2.8H5.8V4c0-.8.2-1.4 1.5-1.4H9V.1C8.7.1 7.8 0 6.6 0c-2.3 0-4 1.3-4 3.8v2.1H0v2.8h2.7V16h3.1z"
  })));
}

Facebook.Color = Color;
Facebook.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  share: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  url: PropTypes.string
};
Facebook.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
};
export default Facebook;
//# sourceMappingURL=Facebook.js.map