import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';

import styles from './IconGroup.scss';

function IconGroup(props) {

    const renderIcon = (icon, index) => {
        const {
            label,
            url
        } = icon;

        const icon_style = {
            backgroundImage: `url(${url})`
        };

        return (
            <div className={styles['icon-container']}>
                <div className={styles['icon']} style={icon_style} />
                {label &&
                    <TextLabel
                        className={styles['label']}
                        tag='span'
                        text={label}
                        color={TextLabel.Color.BLACK}
                        font={props.font}
                    />
                }
            </div>
        );
    };

    const {
        className,
        title,
        icons,
        font
    } = props;

    const container_classname = classnames(
        styles['title'],
        className
    );

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
            {icons && icons.length > 0 &&
                <div className={styles['icons-container']}>
                    {icons.map(renderIcon)}
                </div>
            }
        </div>
    );
}

IconGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icons: PropTypes.array,
    font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

IconGroup.defaultProps = {
    font: TextLabel.Font.AVENIR
}

export default IconGroup;