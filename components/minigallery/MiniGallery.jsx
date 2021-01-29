import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';
import LightBoxImage from 'components/lightboximage';

import styles from './MiniGallery.scss';

function MiniGallery(props) {

    const {
        className,
        title,
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
        </div>
    );
}

MiniGallery.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

export default MiniGallery;