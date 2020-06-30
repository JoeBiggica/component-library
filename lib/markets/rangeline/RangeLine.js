import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.number.constructor";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from "../../textlabel";

require("./RangeLine.css");

var styles = {
  "container": "RangeLine__container___3RUwu",
  "line": "RangeLine__line___2U92A",
  "measured": "RangeLine__measured___1h9LD",
  "marker": "RangeLine__marker___1J1SN",
  "labels": "RangeLine__labels___1RGTm",
  "label": "RangeLine__label___HR280"
};

var RangeLine =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RangeLine, _PureComponent);

  function RangeLine() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RangeLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RangeLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderLabel", function (label) {
      return React.createElement(TextLabel, {
        className: styles['label'],
        text: label,
        font: TextLabel.Font.REGULAR,
        color: TextLabel.Color.GRAY,
        tag: "div",
        key: label
      });
    });

    return _this;
  }

  _createClass(RangeLine, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          values = _this$props.values,
          type = _this$props.type,
          styleset = _this$props.styleset;
      var min = Number(values.min);
      var max = Number(values.max);
      var actual = Number(values.actual);
      var actual_percentage = (actual - min) / (max - min) * 100;
      var percentage = actual_percentage;

      if (actual_percentage > 100) {
        percentage = 95;
      }

      if (actual_percentage < 0) {
        percentage = 5;
      }

      var container_classname = classnames(styles['container'], className);
      var line_classname = classnames(styles['line'], type === 'measured' && styles['measured']);
      var marker_classname = classnames(styles['marker'], type === 'measured' && styles['measured']);
      var line_styles = {
        height: styleset.line.height,
        backgroundColor: styleset.line.color
      };
      var bar_styles = {
        height: '9px',
        width: styleset.line.height,
        backgroundColor: styleset.line.color
      };
      var marker_styles = {
        borderBottom: type === 'solid' && "9px solid ".concat(styleset.marker.color),
        borderTop: type === 'measured' && "9px solid ".concat(styleset.marker.color),
        left: "".concat(percentage - 4, "%")
      };
      return React.createElement("div", {
        className: container_classname,
        style: style
      }, React.createElement("div", {
        className: line_classname,
        style: line_styles
      }, type === 'measured' && React.createElement(React.Fragment, null, React.createElement("div", {
        style: bar_styles,
        key: "bar-1"
      }), React.createElement("div", {
        style: bar_styles,
        key: "bar-2"
      }), React.createElement("div", {
        style: bar_styles,
        key: "bar-3"
      }), React.createElement("div", {
        style: bar_styles,
        key: "bar-4"
      }), React.createElement("div", {
        style: bar_styles,
        key: "bar-5"
      }))), React.createElement("div", {
        className: marker_classname,
        style: marker_styles
      }), this.props.x_labels && React.createElement("div", {
        className: styles('labels')
      }, this.props.x_labels.map(this.renderLabel.bind(this))));
    }
  }]);

  return RangeLine;
}(PureComponent);

_defineProperty(RangeLine, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  values: PropTypes.shape({
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    actual: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  type: PropTypes.string,
  styleset: PropTypes.object,
  x_labels: PropTypes.array,
  dark_mode: PropTypes.bool
});

_defineProperty(RangeLine, "defaultProps", {
  type: 'solid',
  styleset: {
    line: {
      height: '6px',
      color: '#EBEBEB'
    },
    marker: {
      color: '#000000'
    }
  }
});

export default RangeLine;
//# sourceMappingURL=RangeLine.js.map