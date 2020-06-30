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

function LinkedIn(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      url = _ref.url;
  var composed_className = classnames(styles.icon, styles.linkedin, styles[color], borderless ? styles.borderless : undefined, className);
  return React.createElement("button", {
    "aria-label": "LinkedIn",
    type: "button",
    className: composed_className,
    onClick: urlClickHandler(url)
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12"
  }, React.createElement("path", {
    d: "M.1 12V3.6h2.6V12H.1M2.7 1.3c0 .7-.6 1.4-1.3 1.4C.6 2.7 0 2.1 0 1.4S.5 0 1.3 0h.1c.7 0 1.3.5 1.3 1.3 0-.1 0 0 0 0M9.4 12V7.4c0-1.1-.4-1.8-1.3-1.8-.6 0-1.1.4-1.3 1-.1.1-.1.4-.1.6V12H4.2V6.3c0-1 0-1.9-.1-2.7h2.2l.1 1.2C7 3.9 8 3.4 9 3.4c1.7 0 3 1.1 3 3.6v5H9.4"
  })));
}

LinkedIn.Color = Color;
LinkedIn.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  url: PropTypes.string
};
LinkedIn.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
};
export default LinkedIn;
//# sourceMappingURL=LinkedIn.js.map