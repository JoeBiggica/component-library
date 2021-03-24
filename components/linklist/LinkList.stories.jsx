import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import LinkList from './LinkList';
import TextLabel from 'components/textlabel';

const links = [
    {
        url: 'https://www.fongshungga.com',
        display_url: '',
        name: 'Website'
    },
    {
        url: 'https://www.fongshungga.com',
        display_url: '',
        name: 'Form Documents'
    },
    {
        url: 'https://www.fongshungga.com',
        display_url: '',
        name: 'Instagram'
    },
    {
        url: 'https://www.fongshungga.com',
        display_url: '',
        name: 'Facebook'
    }
]

storiesOf('component-library/LinkList', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={object('style', { width: '300px' })}>
            <LinkList
                title={text('title', 'Link List Title')}
                font={select('font', TextLabel.Font)}
                links={object('links', links)}
                link_color={select('link_color', TextLabel.Color)}
            />
        </div>
    ));
