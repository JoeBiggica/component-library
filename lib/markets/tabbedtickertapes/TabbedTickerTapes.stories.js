import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { market_data } from "../tickertape/mock_data.json";
import TabbedTickerTapes from "./TabbedTickerTapes";
var tabs = [{
  name: 'Stocks',
  id: 'stocks'
}, {
  name: 'Bonds',
  id: 'bonds'
}, {
  name: 'Commodities',
  id: 'commodities'
}, {
  name: 'Currencies',
  id: 'currencies'
}];
var quote_lists = [market_data.indices, market_data.bonds, market_data.commodity_futures, market_data.currencypairs];
storiesOf('rcom-common-ui/markets/TabbedTickerTapes', module).addDecorator(centered).addDecorator(withKnobs({
  escapeHTML: false
})).add('default', function () {
  return React.createElement(TabbedTickerTapes, {
    style: {
      width: '940px'
    },
    tabs: tabs,
    quote_lists: object('quote_lists', quote_lists),
    dart_zone: "/4735792/qa.us.reuters/home",
    adstest: "logo"
  });
});
//# sourceMappingURL=TabbedTickerTapes.stories.js.map