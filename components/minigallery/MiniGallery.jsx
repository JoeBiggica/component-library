import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';
import LightBoxImage from 'components/lightboximage';

import styles from './MiniGallery.scss';

function MiniGallery(props) {

    const [lightbox_active, toggleLightBox] = useState(false);
    const [lightbox_image, setLightBoxImage] = useState({});

    function openLightBox(image) {

        toggleLightBox(true);
        setLightBoxImage({ url: image.url });

        document.body.style['overflow-x'] = 'hidden';
        document.body.style['overflow-y'] = 'hidden';
    }

    function closeLightBox() {
        toggleLightBox(false);
        document.body.style['overflow-x'] = '';
        document.body.style['overflow-y'] = '';
    }

    function renderImage(image, index) {
        const {
            url,
            small_url
        } = image;

        const lightbox_image = {
            url
        };

        const image_styles = {
            backgroundImage: `url(${small_url})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };

        lightbox_image.long_image = true;

        return (
            <div
                key={`image-${index}`}
                className={classnames(styles['image'])}
                style={image_styles}
                onClick={() => openLightBox(lightbox_image)}
            />
        );
    }

    const {
        className,
        title,
        images,
        font
    } = props;

    const container_classname = classnames(
        styles['container'],
        className
    )
    return (
        <div className={container_classname}>
            {title &&
                <TextLabel
                    className={styles['title']}
                    tag='h3'
                    text={title}
                    color={TextLabel.Color.BLACK}
                    font={font}
                />
            }
            {images &&
                <div className={styles['images-container']}>
                    {images.map(renderImage)}
                </div>
            }
            { lightbox_active &&
                <LightBoxImage
                    image={lightbox_image}
                    onClick={() => closeLightBox()}
                />
            }
        </div>
    );
}

MiniGallery.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.array,
    font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

export default MiniGallery;