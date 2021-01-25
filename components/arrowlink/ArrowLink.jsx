import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import TextLabel from 'components/textlabel';
import Arrow from 'components/icons/boldnextarrow.svg';

import styles from './ArrowLink.scss';


function ArrowLink(props) {
	const {
		className,
		style,
		text,
	} = props;

	const text_content = [
		text,
		<Arrow key='arrow' className={styles['arrow']} />,
	];

	const dom_props = omit(props, ['text', 'className']);

	return (
		<TextLabel
			{...dom_props}
			className={classnames(styles['container'], className)}
			text={text_content}
			font={TextLabel.Font.MEDIUM}
			color={TextLabel.Color.GREY_TO_BLACK}
		/>
	);
}

ArrowLink.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	text: PropTypes.string,
};

export default ArrowLink;
