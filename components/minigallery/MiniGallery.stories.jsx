import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import MiniGallery from './MiniGallery';
import TextLabel from 'components/textlabel';

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
        url: 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/andrew-lion-head.jpg'
    },
    {
        url: 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/head-banner.jpg'
    },
    {
        url: 'https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/school-lions.jpg'
    },
];

storiesOf('component-library/MiniGallery', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={object('style', { width: '600px' })}>
            <MiniGallery
                title={text('title', 'Gallery Title')}
                font={select('font', TextLabel.Font)}
                images={object('images', images)}
            />
        </div>
    ));
