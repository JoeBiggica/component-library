import { configure } from '@storybook/react';

require('styles/_fonts.scss');

// global decorators
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

// AMP
import { addParameters } from '@storybook/react';
import { withAmpDecorator } from 'storybook-amp';
addDecorator(withAmpDecorator)
addParameters({
	amp: {
	  isEnabled: false,
	},
  });

// Add polyfills
import 'intersection-observer';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

console.log('Load polyfills');

//
function loadStories() {
	const req = require.context('../components', true, /\.stories\.jsx$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
