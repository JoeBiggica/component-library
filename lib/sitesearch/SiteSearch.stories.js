import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import SiteSearch, { SearchField } from "./SiteSearch";
var search_field_style = {
  width: '400px',
  padding: '10px',
  border: '1px solid lightgray'
};
storiesOf('rcom-common-ui/SiteSearch', module).addDecorator(centered).addDecorator(withKnobs).add('default', function () {
  return React.createElement(SiteSearch, null, React.createElement(SearchField, {
    style: search_field_style,
    placeholder: "Search",
    color: select('color', SearchField.Color, SearchField.Color.GRAY),
    auto_focus: true
  }));
});
//# sourceMappingURL=SiteSearch.stories.js.map