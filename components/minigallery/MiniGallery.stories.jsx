import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import MiniGallery from './MiniGallery';
import TextLabel from 'components/textlabel';

const white_bg = {
    name: 'white',
    value: '#FFF',
};

const black_bg = {
    name: 'black',
    value: '#000',
};

const images = [
    {
        url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01.png',
        small_url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01-small.png'
    },
    {
        url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02.png',
        small_url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02-small.png'
    },
    {
        url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03.png',
        small_url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03-small.png'
    },
    {
        url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03.png',
        small_url: 'https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03-small.png'
    }
];

storiesOf('component-library/MiniGallery', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={object('style', { width: '300px' })}>
            <MiniGallery
                title={text('title', 'Gallery Title')}
                font={select('font', TextLabel.Font)}
                images={object('images', images)}
            />
        </div>
    ), {
        backgrounds: [white_bg, black_bg]
    });
