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

function YouTube(_ref) {
  var className = _ref.className,
      color = _ref.color,
      borderless = _ref.borderless,
      url = _ref.url;
  var composed_className = classnames(styles.icon, styles.youtube, styles[color], borderless ? styles.borderless : undefined, className);
  return React.createElement("button", {
    "aria-label": "YouTube",
    type: "button",
    className: composed_className,
    onClick: urlClickHandler(url)
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17.01 11.94"
  }, React.createElement("path", {
    d: "M12 6L6.11 9.27V2.69zm5.5 3V2.92A2.94 2.94 0 0 0 14.4 0H2.6S-.5 0-.5 2.92V9a2.93 2.93 0 0 0 3.1 3h11.8s3.1 0 3.1-3"
  })));
}

YouTube.Color = Color;
YouTube.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  url: PropTypes.string
};
YouTube.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false
};
export default YouTube;
//# sourceMappingURL=YouTube.js.map