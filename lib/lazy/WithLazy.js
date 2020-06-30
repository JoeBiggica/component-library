import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.object.assign";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import omit from 'lodash/omit';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

var WithLazy = function WithLazy(lazy_props) {
  return function (InnerComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(_class, _PureComponent);

      function _class(_props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, _props));

        _defineProperty(_assertThisInitialized(_this), "startObserve", function (ref) {
          _this.intersection_observer = new window.IntersectionObserver(function (entries) {
            var entry = entries[0];
            var in_view = entry.isIntersecting;

            if (in_view) {
              _this.setState({
                in_view: true
              }, _this.stopObserve);
            }
          }, {
            rootMargin: "".concat(_this.props.distance, " 0px")
          });

          _this.intersection_observer.observe(ref);
        });

        _defineProperty(_assertThisInitialized(_this), "stopObserve", function () {
          if (_this.intersection_observer) {
            _this.intersection_observer.disconnect();

            _this.intersection_observer = null;
          }
        });

        _defineProperty(_assertThisInitialized(_this), "getLazyProps", function (props, lazy_props) {
          if (isArray(lazy_props)) {
            return omit(props, lazy_props);
          }

          if (isObject(lazy_props)) {
            return Object.assign({}, props, lazy_props);
          }
        });

        _this.state = {
          in_view: false
        };
        _this.ref = React.createRef();
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.startObserve(this.ref.current);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.stopObserve();
        }
      }, {
        key: "render",
        value: function render() {
          var props = this.state.in_view ? this.props : this.getLazyProps(this.props, lazy_props);
          return React.createElement(InnerComponent, _extends({}, props, {
            ref: this.ref
          }));
        }
      }]);

      return _class;
    }(PureComponent), _defineProperty(_class, "propTypes", {
      distance: PropTypes.string
    }), _defineProperty(_class, "defaultProps", {
      distance: '0px'
    }), _temp;
  };
};

export default WithLazy;
//# sourceMappingURL=WithLazy.js.map