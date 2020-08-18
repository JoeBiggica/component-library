import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import React from 'react';
import PropTypes from 'prop-types'; // Based off Online Usage: https://agency.reuters.com/en/platforms-delivery/reuters-brand-attribution-guidelines/online-usage.html

var Theme = {
  WHITE: {
    logo_color: '#FFFFFF',
    text_color: '#FFFFFF'
  },
  BLACK: {
    logo_color: '#000000',
    text_color: '#000000'
  }
};

function MartialBaseLogo(_ref) {
  var className = _ref.className,
      style = _ref.style,
      theme = _ref.theme,
      title = _ref.title,
      show_text = _ref.show_text;
  var style_one = {
    fill: 'none',
    stroke: theme.logo_color,
    strokeMiterlimit: '10',
    strokeWidth: '9px'
  };
  var style_two = {
    fill: theme.logo_color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style,
    role: "img",
    "aria-label": title,
    title: title,
    alt: title
  }, show_text && /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 152.04 81.2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.16,49.52,36.59,9,63,49.52Z",
    transform: "translate(-1.83)",
    style: style_one
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "87.18 53.98 62.75 16.48 52.54 32.15 45 27.24 62.75 0 97.93 53.98 87.18 53.98",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.35,65.42h3V81H12.91V69.13l.11.68L9.6,79.08H7.54L4.13,70l.1-.9V81H1.83V65.42h3L8.57,75.84Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.67,65.42h1.87L31.4,81H28.64l-4-11.64L20.56,81H17.8ZM20.56,75.61h8.22v2.46H20.56Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.1,65.41h2.57V81H34.1Zm1.06,6.72h5.39a1.72,1.72,0,0,0,1-.26,1.82,1.82,0,0,0,.64-.75A2.76,2.76,0,0,0,42.37,70a2.6,2.6,0,0,0-.22-1.12,1.68,1.68,0,0,0-1.6-1H35.16V65.41h5.46a4.61,4.61,0,0,1,2.32.57,3.88,3.88,0,0,1,1.55,1.61,5.47,5.47,0,0,1,0,4.82A3.94,3.94,0,0,1,42.94,74a4.64,4.64,0,0,1-2.32.57H35.16Zm3.77,2,2.67-.49L45.7,81H42.62Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46.84,65.42H58.08v2.46H46.84Zm4.34,1.28h2.56V81H51.18Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.08,81H60.45V65.42h2.63Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M71.32,65.42h1.87L79.05,81H76.29l-4-11.64L68.21,81H65.45ZM68.21,75.61h8.22v2.46H68.21Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M81.75,65.42h2.57V81H81.75ZM83,78.58h9V81H83Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M101.37,65.42h2.56V81h-2.56Zm1.29,13.19h4.61a3.06,3.06,0,0,0,2-.56,2,2,0,0,0,.65-1.58v0a2.58,2.58,0,0,0-.26-1.19,1.71,1.71,0,0,0-.79-.76,3.09,3.09,0,0,0-1.33-.26h-4.88V71.82h4.88a2.33,2.33,0,0,0,1.62-.51,2,2,0,0,0,.56-1.5,1.81,1.81,0,0,0-.59-1.46,2.62,2.62,0,0,0-1.74-.5h-4.73V65.42h5a5.78,5.78,0,0,1,2.56.51,3.51,3.51,0,0,1,1.58,1.46,4.47,4.47,0,0,1,.54,2.26,3.57,3.57,0,0,1-.34,1.56,3.07,3.07,0,0,1-1,1.18,3.94,3.94,0,0,1-1.62.65,3.72,3.72,0,0,1,1.7.65,3.33,3.33,0,0,1,1.08,1.3,4,4,0,0,1,.38,1.76v0a4.49,4.49,0,0,1-.56,2.27,3.7,3.7,0,0,1-1.63,1.47,5.57,5.57,0,0,1-2.51.52h-5.15Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120.16,65.42H122L127.89,81h-2.76l-4-11.64-4,11.64h-2.77Zm-3.1,10.19h8.21v2.46h-8.21Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M132.37,81a8.68,8.68,0,0,1-1.94-.65,7.69,7.69,0,0,1-1.66-1.06l1.36-2.06a6.37,6.37,0,0,0,2,1.16,7.24,7.24,0,0,0,2.38.39A4.52,4.52,0,0,0,137,78.2a1.78,1.78,0,0,0,.86-1.58h0a1.65,1.65,0,0,0-.38-1.14,2.31,2.31,0,0,0-1-.62,11,11,0,0,0-1.6-.37l-.07,0h-.06l-.2,0a15,15,0,0,1-2.57-.61,3.69,3.69,0,0,1-1.72-1.27,4.09,4.09,0,0,1-.71-2.59h0a4.65,4.65,0,0,1,.66-2.53,4.11,4.11,0,0,1,1.94-1.6,7.56,7.56,0,0,1,3-.55,7.4,7.4,0,0,1,1.68.19,8.38,8.38,0,0,1,1.65.54,9.27,9.27,0,0,1,1.58.9L138.82,69A7.3,7.3,0,0,0,137,68a5.44,5.44,0,0,0-1.82-.33,4.14,4.14,0,0,0-2.3.54,1.73,1.73,0,0,0-.81,1.53h0a1.6,1.6,0,0,0,.42,1.17,2.43,2.43,0,0,0,1.05.63,18,18,0,0,0,1.76.42l.08,0,.08,0,.12,0,.11,0a12.82,12.82,0,0,1,2.43.7,3.79,3.79,0,0,1,1.62,1.31,4.08,4.08,0,0,1,.66,2.46v0a4.42,4.42,0,0,1-.69,2.5,4.22,4.22,0,0,1-2,1.59,8.25,8.25,0,0,1-3.16.54A10.14,10.14,0,0,1,132.37,81Z",
    transform: "translate(-1.83)",
    style: style_two
  }), /*#__PURE__*/React.createElement("path", {
    d: "M143.61,65.42h2.57V81h-2.57Zm1.07,0h9.18v2.46h-9.18Zm0,6.64h8v2.45h-8Zm0,6.52h9.18V81h-9.18Z",
    transform: "translate(-1.83)",
    style: style_two
  })))), !show_text && /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 97.9 54.02"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.3,49.52,34.73,9,61.16,49.52Z",
    style: {
      fill: 'none',
      stroke: theme.logo_color,
      strokeMiterlimit: '10',
      strokeWidth: '9px'
    }
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "87.15 53.98 62.72 16.48 52.51 32.15 44.96 27.24 62.72 0 97.9 53.98 87.15 53.98",
    style: {
      fill: theme.logo_color
    }
  })))));
}

MartialBaseLogo.Theme = Theme;
MartialBaseLogo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.oneOf(Object.values(Theme)),
  title: PropTypes.string,
  show_text: PropTypes.bool
};
MartialBaseLogo.defaultProps = {
  theme: Theme.BLACK,
  title: 'MartialBase'
};
export default MartialBaseLogo;
//# sourceMappingURL=MartialBaseLogo.js.map