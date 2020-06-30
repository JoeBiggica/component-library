import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

require("./TextLabel.css");

var styles = {
  "text-label": "TextLabel__text-label___3oCVw",
  "small-all-caps": "TextLabel__small-all-caps___2Z2RG",
  "small-all-caps-spaced-out": "TextLabel__small-all-caps-spaced-out___3O9H4",
  "small-all-caps-no-spacing": "TextLabel__small-all-caps-no-spacing___3Ic1_",
  "medium": "TextLabel__medium___t9PWg",
  "bold": "TextLabel__bold___nuCHW",
  "regular": "TextLabel__regular___2X0ym",
  "light": "TextLabel__light___1WILL",
  "light-all-caps": "TextLabel__light-all-caps___13-vF",
  "light-all-caps-no-spacing": "TextLabel__light-all-caps-no-spacing___pcfh5",
  "serif": "TextLabel__serif___3lOpX",
  "serif-semi-bold": "TextLabel__serif-semi-bold___2-G6G",
  "gray-to-black": "TextLabel__gray-to-black___PGjdw",
  "gray-to-orange": "TextLabel__gray-to-orange___3Bor1",
  "black-to-orange": "TextLabel__black-to-orange___23uc0",
  "white-to-orange": "TextLabel__white-to-orange___2nwYu",
  "orange": "TextLabel__orange___bulJg",
  "blue-to-orange": "TextLabel__blue-to-orange___1SFN2",
  "gray": "TextLabel__gray___1V4fk",
  "black": "TextLabel__black___2FN-Z",
  "white": "TextLabel__white___32MyF",
  "blue": "TextLabel__blue___3HUIK"
};
var Color = {
  GRAY: 'gray',
  WHITE: 'white',
  BLACK: 'black',
  ORANGE: 'orange',
  BLUE: 'blue',
  GRAY_TO_BLACK: 'gray-to-black',
  GRAY_TO_ORANGE: 'gray-to-orange',
  WHITE_TO_ORANGE: 'white-to-orange',
  BLACK_TO_ORANGE: 'black-to-orange',
  BLUE_TO_ORANGE: 'blue-to-orange'
};
var Font = {
  LIGHT: 'light',
  LIGHT_ALL_CAPS: 'light-all-caps',
  LIGHT_ALL_CAPS_NO_SPACING: 'light-all-caps-no-spacing',
  SMALL_ALL_CAPS: 'small-all-caps',
  SMALL_ALL_CAPS_NO_SPACING: 'small-all-caps-no-spacing',
  SMALL_ALL_CAPS_SPACED_OUT: 'small-all-caps-spaced-out',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  BOLD: 'bold',
  SERIF: 'serif',
  SERIF_SEMI_BOLD: 'serif-semi-bold'
};
var color_values = Object.values(Color);
var font_values = Object.values(Font);

function TextLabel(props) {
  var className = props.className,
      style = props.style,
      text = props.text,
      font = props.font,
      color = props.color,
      tag = props.tag,
      href = props.href,
      handleClick = props.handleClick;
  var use_custom_color = color_values.indexOf(color) < 0;
  var color_className = !use_custom_color && color;
  var composed_className = classnames(styles['text-label'], styles[color_className], styles[font], className);
  var composed_style = Object.assign({}, use_custom_color && {
    color: color
  }, style);
  var Tag = href ? 'a' : tag;
  var dom_props = omit(props, ['text', 'color', 'font', 'tag', 'handleClick']);
  return React.createElement(Tag, _extends({}, dom_props, {
    className: composed_className,
    style: composed_style,
    onClick: handleClick
  }), text);
}

TextLabel.Color = Color;
TextLabel.Font = Font;
TextLabel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
  color: PropTypes.string,
  font: PropTypes.oneOf(font_values),
  tag: PropTypes.string,
  href: PropTypes.string,
  handleClick: PropTypes.func
};
TextLabel.defaultProps = {
  color: Color.GRAY,
  font: Font.SMALL_ALL_CAPS,
  tag: 'p',
  handleClick: function handleClick() {}
};
export default TextLabel;
//# sourceMappingURL=TextLabel.js.map