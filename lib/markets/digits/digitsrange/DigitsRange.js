import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Digits from "./..";
import TextLabel from "../../../textlabel";

require("./DigitsRange.css");

var styles = {
  "container": "DigitsRange__container___3TdzJ",
  "digits": "DigitsRange__digits___1xPsk",
  "separator": "DigitsRange__separator___MZCUY"
};

function DigitsRange(props) {
  var className = props.className,
      values = props.values,
      fixed_decimals = props.fixed_decimals,
      change_color = props.change_color,
      unit = props.unit,
      wrapper = props.wrapper,
      separator = props.separator,
      color = props.color,
      font = props.font;
  var format_props = {
    fixed_decimals: fixed_decimals,
    change_color: change_color,
    unit: unit,
    wrapper: wrapper,
    color: color,
    font: font
  };
  return React.createElement("div", {
    className: classnames(styles['container'], className)
  }, React.createElement(Digits, _extends({
    className: styles['digits'],
    value: values[0]
  }, format_props)), React.createElement(TextLabel, {
    className: styles['separator'],
    text: separator,
    font: font,
    color: color
  }), React.createElement(Digits, _extends({
    className: styles['digits'],
    value: values[1]
  }, format_props)));
}

DigitsRange.Color = Digits.Color;
DigitsRange.Font = Digits.Font;
DigitsRange.propTypes = {
  className: PropTypes.string,
  values: PropTypes.array.isRequired,
  fixed_decimals: PropTypes.number,
  change_color: PropTypes.bool,
  unit: PropTypes.string,
  wrapper: PropTypes.string,
  separator: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string
};
DigitsRange.defaultProps = {
  separator: ' - '
};
export default DigitsRange;
//# sourceMappingURL=DigitsRange.js.map