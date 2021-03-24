import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import IconGroup from './IconGroup';
import TextLabel from 'components/textlabel';

const icons = [
    {
        url: 'https://i.imgur.com/mcheorE.png?1',
        label: 'Grappling'
    },
    {
        url: 'https://i.imgur.com/mcheorE.png?1',
        label: 'Lion Dance'
    },
    {
        url: 'https://i.imgur.com/mcheorE.png?1',
        label: 'Hand Techniques'
    },
    {
        url: 'https://i.imgur.com/mcheorE.png?1',
        label: 'Weapons'
    }
]

storiesOf('component-library/IconGroup', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={object('style', { width: '300px' })}>
            <IconGroup
                title={text('title', 'Icon Group Title')}
                icons={object('icons', icons)}
            />
        </div>
    ));
