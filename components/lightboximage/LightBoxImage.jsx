import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LightBox from 'components/lightbox';

import styles from './LightBoxImage.scss';

function LightBoxImage(props) {

    const renderImage = image => {
        const image_styles = {
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };

        if (image.long_image) {
            return (
                <div className={styles['image-container']}>
                    <img src={image.url} alt={image.url} />
                </div>
            );
        }

        return (
            <div className={styles['image-container']}>
                <div className={styles['image']} style={image_styles} />
            </div>
        );
    };

    const {
        image,
        onClick
    } = props;

    return (
        <LightBox
            onClick={() => onClick()}
        >
            { renderImage(image)}
        </LightBox>
    );
}

LightBoxImage.propTypes = {
    image: PropTypes.object,
    onClick: PropTypes.func
}

export default LightBoxImage;