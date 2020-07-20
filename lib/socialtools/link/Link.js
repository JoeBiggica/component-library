import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import "core-js/modules/es6.string.link";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var CopyLinkIcon = function CopyLinkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M150.2 105.3l15.6-14.6c5.2-5 5.2-13.3 0-18.3s-13.7-5-18.4 0l-15.1 15-3.3-2.7a14.6 14.6 0 0 1 0-21.4l32.6-32c3.3-2.8 7-4.6 11.3-4.6 4.2 0 8.5 1.8 11.3 4.6L208.8 55a14 14 0 0 1 4.7 11c0 4.6-2 7.8-4.7 11l-32.6 31.5a16 16 0 0 1-22.2 0l-3.8-3.2zm-123.6 63c0-4 1.9-7.7 4.7-10.5L64 126.3c2.8-3.2 6.6-5 11.3-5 4.2 0 8 1.8 11.3 5l3.3 2.8s-14.6 14.1-15.5 14.6c-5.2 5-5.2 13.2 0 17.8 5.1 5 13.6 5 18.8 0l15.1-15 2.4 3.1a14.6 14.6 0 0 1 0 21.5l-32.6 32c-6.1 6-16.5 6-22.2 0l-24.5-23.8a15.7 15.7 0 0 1-4.7-11zm-14.2-28.7a39.2 39.2 0 0 0 0 57L37 220.5a42.9 42.9 0 0 0 59.4 0L129 189a41.3 41.3 0 0 0 12.3-28.8c0-11-4.8-21-12.3-28.8l-3.3-3.2 6.1-5.9 2.9 3.2a46 46 0 0 0 29.7 11.9c11.3 0 21.7-4.6 29.7-11.9L226.7 94c8-8 12.3-18 12.3-29s-4.3-21-12.3-28.8L202 12.6a42 42 0 0 0-29.7-12 42 42 0 0 0-29.7 12L110 44a39.4 39.4 0 0 0-12.3 28.8c0 11 4.8 21 12.3 28.8l3.3 2.7-6.1 6-3.3-2.8a40.2 40.2 0 0 0-29.3-11.9 44.1 44.1 0 0 0-29.6 12l-32.6 32z"
  }));
};

CopyLinkIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 239 233"
};
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

function copyLink(url) {
  var input = document.createElement('input');
  input.type = 'text';
  input.value = url;
  document.body.append(input);
  input.select(); // For mobile devices

  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(input);
}

function Link(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      share = _ref.share,
      translations = _ref.translations;
  var composed_className = classnames(styles.icon, styles.link, styles[color], borderless ? styles.borderless : undefined, className);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": translations.copyLink,
    className: composed_className,
    onClick: copyLink.bind(null, share.url)
  }, /*#__PURE__*/React.createElement(CopyLinkIcon, null));
}

Link.Color = Color;
Link.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  share: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  translations: PropTypes.shape({
    copyLink: PropTypes.string
  })
};
Link.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false,
  translations: {
    copyLink: 'Copy link'
  }
};
export default Link;
//# sourceMappingURL=Link.js.map