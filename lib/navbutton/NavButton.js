import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

var PrevArrow = function PrevArrow(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.028 28.27l-1.056 1.066L.29 14.78 14.972.226l1.056 1.066L2.421 14.78z"
  }));
};

PrevArrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 30"
};

var NextArrow = function NextArrow(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M.29 28.27l1.056 1.066L16.028 14.78 1.346.226.29 1.292 13.898 14.78z"
  }));
};

NextArrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 30"
};

var BoldPrevArrow = function BoldPrevArrow(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M192 32.4L159.7 0 0 160l159.7 160 32.3-32.4L64.7 160z"
  }));
};

BoldPrevArrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 192 320"
};

var BoldNextArrow = function BoldNextArrow(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M0 32.4L32.3 0 192 160 32.3 320 0 287.6 127.3 160z"
  }));
};

BoldNextArrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 192 320"
};

require("./NavButton.css");

var styles = {
  "button": "NavButton__button___sZEGu",
  "icon": "NavButton__icon___Pw1KL",
  "small": "NavButton__small___13uP3",
  "medium": "NavButton__medium___31tMx",
  "large": "NavButton__large___1xN0L",
  "white-arrow": "NavButton__white-arrow___yywaV",
  "white-box": "NavButton__white-box___3xAnd",
  "black-box": "NavButton__black-box___3Muqs",
  "very-dark-box": "NavButton__very-dark-box___2Fz6i",
  "white-circle": "NavButton__white-circle___3hpRz",
  "enter": "NavButton__enter___5p4bV",
  "enter-active": "NavButton__enter-active___2d059",
  "enter-done": "NavButton__enter-done___1dmRp",
  "exit": "NavButton__exit___2MWS9",
  "exit-active": "NavButton__exit-active___29WJE",
  "exit-done": "NavButton__exit-done___2xMq2"
};

function NavButton(props) {
  var className = props.className,
      children = props.children,
      hidden = props.hidden,
      direction = props.direction,
      size = props.size,
      theme = props.theme,
      onClick = props.onClick,
      translations = props.translations;
  var is_prev = direction === NavButton.Direction.LEFT;
  var is_next = direction === NavButton.Direction.RIGHT;
  var PrevArrowComp = theme === NavButton.Theme.WHITE_CIRCLE ? BoldPrevArrow : PrevArrow;
  var NextArrowComp = theme === NavButton.Theme.WHITE_CIRCLE ? BoldNextArrow : NextArrow;
  return /*#__PURE__*/React.createElement(CSSTransition, {
    timeout: 250,
    in: !hidden,
    mountOnEnter: true,
    classNames: {
      enter: styles.enter,
      enterActive: styles['enter-active'],
      enterDone: styles['enter-done'],
      exit: styles.exit,
      exitActive: styles['exit-active'],
      exitDone: styles['exit-done']
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": is_prev ? translations.previous : is_next ? translations.next : false,
    className: classnames(styles.button, styles[size], styles[theme], is_prev && styles.prev, is_next && styles.next, className),
    onClick: onClick
  }, is_prev && /*#__PURE__*/React.createElement(PrevArrowComp, {
    className: styles.icon
  }), is_next && /*#__PURE__*/React.createElement(NextArrowComp, {
    className: styles.icon
  }), children));
}

NavButton.Direction = {
  LEFT: 'left',
  RIGHT: 'right'
};
NavButton.Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
NavButton.Theme = {
  WHITE_BOX: 'white-box',
  VERY_DARK_BOX: 'very-dark-box',
  BLACK_BOX: 'black-box',
  WHITE_ARROW: 'white-arrow',
  WHITE_CIRCLE: 'white-circle'
};
NavButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(NavButton.Size)),
  theme: PropTypes.oneOf(Object.values(NavButton.Theme)),
  direction: PropTypes.oneOf(Object.values(NavButton.Direction)).isRequired,
  onClick: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string
  })
};
NavButton.defaultProps = {
  hidden: false,
  size: NavButton.Size.MEDIUM,
  theme: NavButton.Theme.WHITE_BOX,
  translations: {
    previous: 'Previous',
    next: 'Next'
  }
};
export default NavButton;
//# sourceMappingURL=NavButton.js.map