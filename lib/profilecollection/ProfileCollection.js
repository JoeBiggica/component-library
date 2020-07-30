import "core-js/modules/es6.function.name";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from "../textlabel";

require("./ProfileCollection.css");

var styles = {
  "container": "ProfileCollection__container___4QJke",
  "image": "ProfileCollection__image___14_cf",
  "round": "ProfileCollection__round___1d9QL"
};

function ProfileCollection(props) {
  var className = props.className,
      profiles = props.profiles,
      round = props.round,
      drop_shadow = props.drop_shadow,
      show_name = props.show_name,
      width = props.width;

  var renderProfile = function renderProfile(profile, index) {
    var image_url = profile.image_url,
        name = profile.name,
        url = profile.url;
    console.log(profile);
    var round = props.round,
        drop_shadow = props.drop_shadow,
        show_name = props.show_name,
        width = props.width;
    var image_classname = classnames(styles['image'], styles[round && 'round'], styles[drop_shadow && 'shadow']);
    var image_style = {
      width: width,
      height: width,
      backgroundImage: "url(".concat(image_url, ")")
    };

    if (url) {
      return /*#__PURE__*/React.createElement("a", {
        key: "profile-".concat(index),
        className: image_classname,
        style: image_style,
        href: url
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      key: "profile-".concat(index),
      className: image_classname,
      style: image_style
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['container'], className)
  }, profiles && profiles.map(renderProfile));
}

ProfileCollection.propTypes = {
  className: PropTypes.string,
  profiles: PropTypes.array,
  round: PropTypes.bool,
  drop_shadow: PropTypes.bool,
  show_name: PropTypes.bool,
  width: PropTypes.string
};
ProfileCollection.defaultProps = {
  width: '100px'
};
export default ProfileCollection;
//# sourceMappingURL=ProfileCollection.js.map