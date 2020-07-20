import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var EmailIcon = function EmailIcon(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M52.768 45.627a1.644 1.644 0 0 1 2.331 0l16.702 16.704c.283-.631.44-1.34.44-2.077V26.32c0-.625-.094-1.286-.268-1.954-.808 1.266-1.816 2.375-3.022 3.164L41.2 46.065c-1.5.962-3.295 1.372-5.08 1.379-1.782-.007-3.58-.417-5.078-1.379L3.293 27.53c-1.208-.789-2.22-1.897-3.023-3.164A7.802 7.802 0 0 0 0 26.32v33.934c0 .737.159 1.446.442 2.077l16.702-16.704a1.644 1.644 0 0 1 2.331 0 1.646 1.646 0 0 1 0 2.331L2.69 64.75a4.792 4.792 0 0 0 2.258.568h62.345c.813 0 1.58-.207 2.259-.568L52.768 47.958a1.65 1.65 0 0 1 0-2.331z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.056 19.222L40.309 1.115c-2.304-1.486-6.073-1.486-8.374 0L4.187 19.222c-.768.491-1.744 1.316-1.506 1.757.646 1.209 1.566 2.261 2.398 2.792l7.416 4.843v-5.662a4.952 4.952 0 0 1 4.95-4.954h37.354a4.95 4.95 0 0 1 4.946 4.954v5.662l7.419-4.843c.833-.531 1.752-1.583 2.398-2.792.238-.44-.738-1.266-1.506-1.757z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.423 28.893a1.65 1.65 0 1 1 0-3.3h21.396a1.651 1.651 0 0 1 0 3.3H25.423zM25.421 36.448a1.649 1.649 0 1 1 0-3.299h14.141a1.648 1.648 0 1 1 0 3.299H25.421z"
  }));
};

EmailIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 72.241 65.318"
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

function createURL(_ref) {
  var title = _ref.title,
      url = _ref.url;
  return 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
}

function urlClickHandler(url) {
  return function () {
    window.open(url, '_self');
  };
}

function Email(_ref2) {
  var className = _ref2.className,
      color = _ref2.color,
      borderless = _ref2.borderless,
      share = _ref2.share,
      translations = _ref2.translations;
  var composed_className = classnames(styles.icon, styles.email, styles[color], borderless ? styles.borderless : undefined, className);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": translations.email,
    className: composed_className,
    onClick: urlClickHandler(createURL(share))
  }, /*#__PURE__*/React.createElement(EmailIcon, null));
}

Email.Color = Color;
Email.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Color)),
  borderless: PropTypes.bool,
  share: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  translations: PropTypes.shape({
    email: PropTypes.string
  })
};
Email.defaultProps = {
  color: Color.GRAY_TO_ORIGINAL,
  borderless: false,
  translations: {
    email: 'Email'
  }
};
export default Email;
//# sourceMappingURL=Email.js.map