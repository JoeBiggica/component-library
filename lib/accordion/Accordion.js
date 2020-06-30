import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";

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
import findIndex from 'lodash/findIndex';
import isNumber from 'lodash/isNumber';

require("./Accordion.css");

var styles = {
  "container": "Accordion__container___2o0TA",
  "header": "Accordion__header___AuhSS",
  "body": "Accordion__body___302el"
};

var Accordion =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Accordion, _PureComponent);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getBodyRef", function () {
      var refs = [];
      return function (index) {
        if (!refs[index]) {
          refs[index] = React.createRef();
        }

        return refs[index];
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getBodyHeight", function (index) {
      var ref = _this.getBodyRef(index);

      if (ref) {
        return ref.current.offsetHeight;
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveIndex", function (index) {
      return _this.state.active_indices.indexOf(index) > -1;
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveBodyHeights", function () {
      var body_heights = _this.state.body_heights.map(function (height, i) {
        if (_this.isActiveIndex(i)) {
          var body_height = _this.getBodyHeight(i);

          return "".concat(body_height, "px");
        }

        return _this.props.collapse_others ? 0 : height;
      });

      _this.setState({
        body_heights: body_heights
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickHeader", function (index) {
      var will_collapse = _this.isActiveIndex(index);

      var active_indices;
      var body_heights;

      if (will_collapse) {
        body_heights = _this.state.body_heights.map(function (height, i) {
          if (i === index) {
            return 0;
          }

          return height;
        });
        active_indices = _this.state.active_indices.filter(function (i) {
          return i !== index;
        });
      } else {
        body_heights = _this.state.body_heights.map(function (height, i) {
          if (i === index) {
            var body_height = _this.getBodyHeight(index);

            return "".concat(body_height, "px");
          }

          return _this.props.collapse_others ? 0 : height;
        });
        active_indices = _this.props.collapse_others ? [index] : _this.state.active_indices.concat(index);
      }

      _this.setState({
        active_indices: active_indices,
        body_heights: body_heights
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item, index) {
      var active = _this.isActiveIndex(index);

      var body_style = {
        transitionDuration: _this.props.transition_duration,
        height: _this.state.body_heights[index]
      };
      return React.createElement("li", {
        key: index
      }, React.createElement("div", {
        className: styles['header'],
        onClick: _this.handleClickHeader.bind(_assertThisInitialized(_this), index)
      }, _this.props.renderHeader(item, index, active)), React.createElement("div", {
        className: styles['body'],
        style: body_style
      }, React.createElement("div", {
        ref: _this.getBodyRef(index)
      }, _this.props.renderBody(item, index, active))));
    });

    var initial_active_index = props.initial_active_index;
    var initial_active_indices = [];

    if (isNumber(initial_active_index)) {
      initial_active_indices.push(initial_active_index);
    }

    var initial_body_heights = props.items.map(function (item, index) {
      return initial_active_index === index ? 'auto' : '0';
    });
    _this.state = {
      active_indices: initial_active_indices,
      body_heights: initial_body_heights
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.body_size_observer = new window.ResizeObserver(this.updateActiveBodyHeights);
      this.props.items.forEach(function (item, index) {
        var ref = _this2.getBodyRef(index);

        _this2.body_size_observer.observe(ref.current);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.body_size_observer.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          items = _this$props.items;
      return React.createElement("ul", {
        className: classnames(styles['container'], className),
        style: style
      }, items.map(this.renderItem));
    }
  }]);

  return Accordion;
}(PureComponent);

_defineProperty(Accordion, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.array,
  initial_active_index: PropTypes.number,
  transition_duration: PropTypes.string,
  collapse_others: PropTypes.bool,
  renderHeader: PropTypes.func.isRequired,
  renderBody: PropTypes.func.isRequired
});

_defineProperty(Accordion, "defaultProps", {
  items: [],
  transition_duration: '400ms',
  collapse_others: false
});

export { Accordion as default };
//# sourceMappingURL=Accordion.js.map