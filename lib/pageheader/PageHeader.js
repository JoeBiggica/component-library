import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from "../textlabel";

require("./PageHeader.css");

var styles = {
  "container": "PageHeader__container___3ktzp",
  "inner": "PageHeader__inner___3_Dcy",
  "title": "PageHeader__title___1UdnQ",
  "padding": "PageHeader__padding___10Pw6",
  "underline": "PageHeader__underline___2Ki7C",
  "background": "PageHeader__background___2nKxu",
  "skew": "PageHeader__skew___Ttuy8"
};

function PageHeader(props) {
  var className = props.className,
      title = props.title,
      font_color = props.font_color,
      background = props.background,
      background_color = props.background_color,
      background_skew = props.background_skew,
      underline = props.underline,
      underline_color = props.underline_color;
  var title_classname = classnames(className, styles['title'], styles[background && !background_skew && 'padding']);
  var background_classname = classnames(styles['background'], styles[background_skew && 'skew']);
  var background_style = {
    background: background_color
  };
  var underline_style = {
    background: underline_color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['container'], className)
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['inner'])
  }, /*#__PURE__*/React.createElement(TextLabel, {
    className: title_classname,
    font: TextLabel.Font.FUTURA,
    text: title,
    color: font_color,
    tag: "h2"
  }), underline && /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['underline']),
    style: underline_style
  }), background && /*#__PURE__*/React.createElement("div", {
    className: background_classname,
    style: background_style
  })));
}

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  font_color: PropTypes.string,
  background: PropTypes.bool,
  background_color: PropTypes.string,
  background_skew: PropTypes.bool,
  underline: PropTypes.bool,
  underline_color: PropTypes.string
};
export default PageHeader;
//# sourceMappingURL=PageHeader.js.map