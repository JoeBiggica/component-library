import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import TextLabel from "../textlabel";

function formatTime(time, show_hours) {
  var sec = parseInt(time, 10);
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor((sec - hours * 3600) / 60);
  var seconds = sec - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (show_hours) {
    return [hours, minutes, seconds].join(':');
  }

  return [minutes, seconds].join(':');
}

function Duration(props) {
  var seconds = props.seconds;
  var show_hours = seconds / 3600 >= 1;
  var formatted_duration = formatTime(seconds, show_hours);
  var text_label_props = omit(props, ['seconds']);
  return React.createElement(TextLabel, _extends({}, text_label_props, {
    text: formatted_duration
  }));
}

Duration.propTypes = _objectSpread2({}, TextLabel.propTypes, {
  seconds: PropTypes.number
});
Duration.defaultProps = {
  seconds: 0
};
Duration.Font = TextLabel.Font;
Duration.Color = TextLabel.Color;
export default Duration;
//# sourceMappingURL=Duration.js.map