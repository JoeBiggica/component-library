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

import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
var context = createContext({
  current_tab_id: '',
  changeTab: function changeTab() {}
});
var Provider = context.Provider,
    Consumer = context.Consumer;

var ClickableTab = function ClickableTab(_ref) {
  var id = _ref.id,
      className = _ref.className,
      className_active = _ref.className_active,
      children = _ref.children;
  return React.createElement(Consumer, null, function (_ref2) {
    var current_tab_id = _ref2.current_tab_id,
        changeTab = _ref2.changeTab;
    var composed_className = classnames(className, _defineProperty({}, className_active, current_tab_id === id));
    return React.createElement("div", {
      className: composed_className,
      onClick: function onClick() {
        return changeTab(id);
      }
    }, children);
  });
};

ClickableTab.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  className_active: PropTypes.string,
  children: PropTypes.node
};

var HoverableTab = function HoverableTab(_ref3) {
  var id = _ref3.id,
      className = _ref3.className,
      className_active = _ref3.className_active,
      children = _ref3.children;
  return React.createElement(Consumer, null, function (_ref4) {
    var current_tab_id = _ref4.current_tab_id,
        changeTab = _ref4.changeTab;
    var active = current_tab_id === id;
    var composed_className = classnames(className, _defineProperty({}, className_active, active));
    return React.createElement("div", {
      className: composed_className,
      onMouseEnter: function onMouseEnter() {
        return changeTab(id);
      },
      onMouseLeave: function onMouseLeave() {
        return changeTab();
      },
      onFocus: function onFocus() {
        return changeTab(id);
      },
      onBlur: function onBlur(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          changeTab();
        }
      }
    }, children);
  });
};

HoverableTab.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  className_active: PropTypes.string,
  children: PropTypes.node
};

var TabPanel = function TabPanel(_ref5) {
  var id = _ref5.id,
      children = _ref5.children;
  return React.createElement(Consumer, null, function (_ref6) {
    var current_tab_id = _ref6.current_tab_id;
    return current_tab_id === id ? children : null;
  });
};

TabPanel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

var TabSwitcher =
/*#__PURE__*/
function (_Component) {
  _inherits(TabSwitcher, _Component);

  function TabSwitcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      current_tab_id: ''
    });

    _defineProperty(_assertThisInitialized(_this), "changeTab", function (tab_id) {
      _this.setState({
        current_tab_id: tab_id
      });
    });

    return _this;
  }

  _createClass(TabSwitcher, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: {
          current_tab_id: this.state.current_tab_id,
          changeTab: this.changeTab
        }
      }, this.props.children);
    }
  }]);

  return TabSwitcher;
}(Component);

_defineProperty(TabSwitcher, "propTypes", {
  children: PropTypes.node
});

export default TabSwitcher;
export { ClickableTab, HoverableTab, TabPanel };
//# sourceMappingURL=TabSwitcher.js.map