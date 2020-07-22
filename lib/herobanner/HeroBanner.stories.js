import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean as _boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import HeroBanner from "./HeroBanner";
var black_bg = {
  name: 'black',
  value: '#000'
};
storiesOf('component-library/HeroBanner', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw'
    }
  }, /*#__PURE__*/React.createElement(HeroBanner, {
    title: text('title', 'Hero Banner Title'),
    text_position: select('text_position', HeroBanner.TextPosition),
    text_gradient: select('text_gradient', HeroBanner.TextGradient),
    background_image: text('background_image', 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/three-lions.jpg'),
    background_position: select('background_position', HeroBanner.BackgroundPosition),
    background_gradient: select('background_gradient', HeroBanner.BackgroundGradient),
    hero_height: select('hero_height', HeroBanner.HeroHeight)
  }));
}, {
  backgrounds: [black_bg]
});
//# sourceMappingURL=HeroBanner.stories.js.map