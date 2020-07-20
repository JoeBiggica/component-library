import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var Close = function Close(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M11.8 10.4l8.7-8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L10.4 9 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.3L9 10.4.3 19.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.3 0l8.7-8.7 8.7 8.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.3l-8.6-8.8z"
  }));
};

Close.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20.8 20.8"
};

require("./LightBox.css");

var styles = {
  "container": "LightBox__container___3NzL1",
  "inner": "LightBox__inner___cHFtm",
  "close": "LightBox__close___3wtmf"
};

function LightBox(props) {
  var children = props.children,
      onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['container']),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['inner'])
  }, /*#__PURE__*/React.createElement(Close, {
    className: classnames(styles['close'])
  }), children));
}

LightBox.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func
};
export default LightBox;
//# sourceMappingURL=LightBox.js.map