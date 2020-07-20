import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.function.name";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Link from 'next/link';
import Poster from "./poster";

require("./Portfolio.css");

var styles = {
  "container": "Portfolio__container___1jW3K",
  "items-wrapper": "Portfolio__items-wrapper___2kv5f",
  "item": "Portfolio__item___3C7xy"
};

var Portfolio = /*#__PURE__*/function (_Component) {
  _inherits(Portfolio, _Component);

  var _super = _createSuper(Portfolio);

  function Portfolio(props) {
    var _this;

    _classCallCheck(this, Portfolio);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      active_project_index: null,
      active_project: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderPoster", function (p, i) {
      return /*#__PURE__*/React.createElement("a", {
        key: "project-".concat(i),
        href: "/project/".concat(p.name),
        className: styles('item')
      }, /*#__PURE__*/React.createElement(Poster, p));
    });

    _this.projects = [{
      name: 'skullcandy',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/skullcandy/Skullcandy_01.jpg',
      title: 'Skullcandy'
    }, {
      name: 'barkbox',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_01.jpg',
      title: 'BarkBox'
    }, {
      name: 'tesla',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/tesla/Tesla_01.jpg',
      title: 'Tesla'
    }, {
      name: 'crest',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/crest/Crest_01.jpg',
      title: 'Crest'
    }, {
      name: 'pizzahut',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/pizzahut/PizzaHut_01.jpg',
      title: 'Pizza Hut'
    }, {
      name: 'nabi',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/nabi/Nabi_01.jpg',
      title: 'Nabi'
    }, {
      name: 'nike',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/nike/Nike_01.jpg',
      title: 'Nike'
    }, {
      name: 'texaspetes',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/texaspetes/TexasPetes_01.jpg',
      title: 'Texas Pete\'s'
    }, {
      name: 'greygoose',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/greygoose/GreyGoose_01.jpg',
      title: 'Grey Goose'
    }, {
      name: 'bai5',
      poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/bai5/Bai5_01.jpg',
      title: 'Bai5'
    }];
    return _this;
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      var active_project = this.projects[this.state.active_project_index];
      return /*#__PURE__*/React.createElement("div", {
        className: styles('container')
      }, /*#__PURE__*/React.createElement("div", {
        className: styles('items-wrapper')
      }, this.projects.map(this.renderPoster.bind(this))));
    }
  }]);

  return Portfolio;
}(Component);

export { Portfolio as default };
//# sourceMappingURL=Portfolio.js.map