import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CopyLinkIcon from 'components/icons/copylink.svg';

import Color from '../Color';
import styles from '../SocialTools.scss';


function copyLink(url) {
	const input = document.createElement('input');
	input.type = 'text';
	input.value = url;
	document.body.append(input);
	input.select();
	// For mobile devices
	input.setSelectionRange(0, 99999);
	document.execCommand('copy');
	document.body.removeChild(input);
}

function Link({className, color, borderless, share, translations}) {
	const composed_className = classnames(
		styles.icon,
		styles.link,
		styles[color],
		borderless ? styles.borderless : undefined,
		className,
	);
	
	return (
		<button
			aria-label={translations.copyLink}
			className={composed_className}
			onClick={copyLink.bind(null, share.url)}
		>
			<CopyLinkIcon />
		</button>
	);
}

Link.Color = Color;

Link.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	share: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
	translations: PropTypes.shape({
		copyLink: PropTypes.string
	})
};

Link.defaultProps = {
	color: Color.GRAY_TO_ORIGINAL,
	borderless: false,
	translations: {copyLink: 'Copy link'}
};

export default Link;
