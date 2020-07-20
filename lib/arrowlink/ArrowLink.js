import "core-js/modules/es6.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import TextLabel from "../textlabel";

var Arrow = function Arrow(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M0 32.4L32.3 0 192 160 32.3 320 0 287.6 127.3 160z"
  }));
};

Arrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 192 320"
};

require("./ArrowLink.css");

var styles = {
  "container": "ArrowLink__container___1hQ5-",
  "arrow": "ArrowLink__arrow___1iVjX"
};

function ArrowLink(props) {
  var className = props.className,
      style = props.style,
      text = props.text;
  var text_content = [text, /*#__PURE__*/React.createElement(Arrow, {
    key: "arrow",
    className: styles['arrow']
  })];
  var dom_props = omit(props, ['text', 'className']);
  return /*#__PURE__*/React.createElement(TextLabel, _extends({}, dom_props, {
    className: classnames(styles['container'], className),
    text: text_content,
    font: TextLabel.Font.MEDIUM,
    color: TextLabel.Color.GRAY_TO_BLACK
  }));
}

ArrowLink.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};
export default ArrowLink;
//# sourceMappingURL=ArrowLink.js.map