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

require("./StickyContainer.css");

var styles = {
  "container": "StickyContainer__container___3hfzo",
  "content": "StickyContainer__content___3W_pU",
  "bottom": "StickyContainer__bottom___16tMt",
  "disabled": "StickyContainer__disabled___xxo-F",
  "sticky": "StickyContainer__sticky___1ESEF"
};

var StickyContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StickyContainer, _PureComponent);

  function StickyContainer(props) {
    var _this;

    _classCallCheck(this, StickyContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StickyContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      sticky: false,
      at_bottom: false,
      content_height: 0
    });

    _this.top_tracker_ref = React.createRef();
    _this.bottom_tracker_ref = React.createRef();
    _this.content_ref = React.createRef();
    return _this;
  }

  _createClass(StickyContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          top_threshold = _this$props.top_threshold,
          ignore_bottom = _this$props.ignore_bottom;
      this.intersection_observer = new window.IntersectionObserver(function (entries) {
        var sticky = _this2.state.sticky;
        var at_bottom = _this2.state.at_bottom;
        entries.forEach(function (entry) {
          if (entry.target === _this2.top_tracker_ref.current) {
            sticky = entry.boundingClientRect.top < top_threshold;
          } else if (!ignore_bottom && entry.target === _this2.bottom_tracker_ref.current) {
            if (entry.isIntersecting && entry.boundingClientRect.top < top_threshold) {
              sticky = true;
              at_bottom = false;
            }

            if (!entry.isIntersecting && entry.boundingClientRect.bottom < top_threshold) {
              at_bottom = true;
              sticky = false;
            }
          }
        });

        _this2.setState({
          sticky: sticky,
          at_bottom: at_bottom
        });
      }, {
        rootMargin: "".concat(-top_threshold, "px 0px 0px 0px"),
        threshold: [0, 1]
      });
      this.intersection_observer.observe(this.top_tracker_ref.current);
      this.intersection_observer.observe(this.bottom_tracker_ref.current);
      this.size_observer = new window.ResizeObserver(function (entries) {
        var entry = entries[0];

        _this2.setState({
          content_height: entry.target.clientHeight
        });
      });
      this.size_observer.observe(this.content_ref.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.intersection_observer.disconnect();
      this.intersection_observer = null;
      this.size_observer.disconnect();
      this.size_observer = null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev_props, prev_state) {
      if (prev_state.sticky !== this.state.sticky) {
        this.props.onChange(this.state.sticky);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          children = _this$props2.children,
          top_threshold = _this$props2.top_threshold,
          disabled = _this$props2.disabled;
      var _this$state = this.state,
          sticky = _this$state.sticky,
          at_bottom = _this$state.at_bottom,
          content_height = _this$state.content_height;
      return React.createElement("div", {
        className: classnames(styles['container'], className),
        style: style
      }, React.createElement("div", {
        ref: this.top_tracker_ref
      }), React.createElement("div", {
        ref: this.bottom_tracker_ref,
        style: {
          height: "calc(100% - ".concat(content_height, "px)")
        }
      }), React.createElement("div", {
        ref: this.content_ref,
        className: classnames(styles['content'], disabled && styles['disabled'], sticky && styles['sticky'], at_bottom && styles['bottom']),
        style: sticky ? {
          marginTop: "".concat(top_threshold, "px")
        } : undefined
      }, children));
    }
  }]);

  return StickyContainer;
}(PureComponent);

_defineProperty(StickyContainer, "propTypes", {
  className: PropTypes.string,
  top_threshold: PropTypes.number,
  ignore_bottom: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func
});

_defineProperty(StickyContainer, "defaultProps", {
  top_threshold: 0,
  ignore_bottom: false,
  disabled: false,
  onChange: function onChange() {}
});

export { StickyContainer as default };
//# sourceMappingURL=StickyContainer.js.map