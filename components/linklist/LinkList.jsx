import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';

import styles from './LinkList.scss';

function LinkList(props) {

    const renderLink = (link, index) => {
        const {
            url,
            display_url,
            name
        } = link;

        return (
            <div className={styles['link-container']}>
                {name &&
                    <TextLabel
                        className={styles['name']}
                        tag='p'
                        text={name}
                        color={TextLabel.Color.BLACK}
                        font={props.font}
                    />
                }
                {url &&
                    <TextLabel
                        className={styles['link']}
                        tag='a'
                        href={url}
                        text={display_url ? display_url : url}
                        color={props.link_color}
                        font={props.font}
                    />
                }
            </div>
        );
    }

    const {
        className,
        title,
        font,
        links
    } = props;

    const container_classname = classnames(
        styles['container'],
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
            {links && links.length > 0 &&
                <div className={styles['links-container']}>
                    {links.map(renderLink)}
                </div>
            }
        </div>
    );
}

LinkList.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    font: PropTypes.oneOf(Object.values(TextLabel.Font)),
    links: PropTypes.array,
    link_color: PropTypes.oneOf(Object.values(TextLabel.Color))
}

export default LinkList;