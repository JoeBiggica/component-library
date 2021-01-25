import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import EmailIcon from 'components/icons/email.svg';

import Color from '../Color';
import styles from '../SocialTools.scss';


function createURL({title, url}) {
	return 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
}

function urlClickHandler(url) {
	return () => {
		window.open(url, '_self');
	};
}

function Email({className, color, borderless, share, translations}) {
	const composed_className = classnames(
		styles.icon,
		styles.email,
		styles[color],
		borderless ? styles.borderless : undefined,
		className,
	);
	
	return (
		<button
			aria-label={translations.email}
			className={composed_className}
			onClick={urlClickHandler(createURL(share))}
		>
			<EmailIcon />
		</button>
	);
}

Email.Color = Color;

Email.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	share: PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	translations: PropTypes.shape({
		email: PropTypes.string
	})
};

Email.defaultProps = {
	color: Color.GREY_TO_ORIGINAL,
	borderless: false,
	translations: {email: 'Email'}
};

export default Email;
