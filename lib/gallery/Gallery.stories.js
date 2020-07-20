import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean as _boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import Gallery from "./Gallery";
var black_bg = {
  name: 'black',
  value: '#000'
};
var images = [{
  "url": "https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_01.jpg"
}, {
  "url": "https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_02.jpg"
}, {
  "url": "https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_03.jpg"
}, {
  "url": "https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_04.jpg"
}];
storiesOf('component-library/Gallery', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '40px'
    }
  }, /*#__PURE__*/React.createElement(Gallery, {
    style: object('style', {
      width: '100%'
    }),
    images: images
  }));
}, {
  backgrounds: [black_bg]
});
//# sourceMappingURL=Gallery.stories.js.map