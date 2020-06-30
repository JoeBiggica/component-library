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

function Rss(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      url = _ref.url;
  var composed_className = classnames(styles.icon, styles.rss, styles[color], borderless ? styles.borderless : undefined, className);
  return React.createElement("button", {
    "aria-label": "RSS",
    type: "button",
    className: composed_className,
    onClick: urlClickHandler(url)
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17.01 17.01"
  }, React.createElement("path", {
    d: "M3.85 13.15a2.24 2.24 0 0 1 0 3.18 2.26 2.26 0 0 1-3.19 0 2.24 2.24 0 0 1 0-3.18 2.25 2.25 0 0 1 3.19 0zm0 0zM.66 16.33zM0 5.78V9a7.92 7.92 0 0 1 5.62 2.34A7.94 7.94 0 0 1 8 17h3.26a11.2 11.2 0 0 0-3.33-7.92A11.18 11.18 0 0 0 0 5.78zM0 0v3.25A13.78 13.78 0 0 1 13.75 17H17a17 17 0 0 0-5-12A17 17 0 0 0 0 0z"
  })));
}

Rss.Color = Color;
Rss.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  url: PropTypes.string
};
Rss.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
};
export default Rss;
//# sourceMappingURL=Rss.js.map