import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import IconGroup from './IconGroup';
import TextLabel from 'components/textlabel';

const white_bg = {
    name: 'white',
    value: '#FFF',
};

const black_bg = {
    name: 'black',
    value: '#000',
};

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
                box_shadow={boolean('box_shadow', true)}
            />
        </div>
    ), {
        backgrounds: [white_bg, black_bg]
    });
