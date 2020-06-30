import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { market_data } from "./mock_data.json";
import TickerTape from "./TickerTape";
var quotes = [].concat(_toConsumableArray(market_data.indices), _toConsumableArray(market_data.bonds), _toConsumableArray(market_data.commodity_futures), _toConsumableArray(market_data.currencypairs));
storiesOf('rcom-common-ui/markets/TickerTape', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return React.createElement(TickerTape, {
    style: {
      width: '100vw',
      maxWidth: '800px'
    },
    quotes: quotes
  });
});
//# sourceMappingURL=TickerTape.stories.js.map