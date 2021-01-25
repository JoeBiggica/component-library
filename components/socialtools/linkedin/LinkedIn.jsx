import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Color from '../Color';
import styles from '../SocialTools.scss';


function urlClickHandler(url) {
	return () => {
		window.open(url, '_blank');
	};
}

function LinkedIn({className, color, borderless, url}) {
	const composed_className = classnames(
		styles.icon,
		styles.linkedin,
		styles[color],
		borderless ? styles.borderless : undefined,
		className,
	);

	return (
		<button
			aria-label='LinkedIn'
			type='button'
			className={composed_className}
			onClick={urlClickHandler(url)}
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
				<path d='M.1 12V3.6h2.6V12H.1M2.7 1.3c0 .7-.6 1.4-1.3 1.4C.6 2.7 0 2.1 0 1.4S.5 0 1.3 0h.1c.7 0 1.3.5 1.3 1.3 0-.1 0 0 0 0M9.4 12V7.4c0-1.1-.4-1.8-1.3-1.8-.6 0-1.1.4-1.3 1-.1.1-.1.4-.1.6V12H4.2V6.3c0-1 0-1.9-.1-2.7h2.2l.1 1.2C7 3.9 8 3.4 9 3.4c1.7 0 3 1.1 3 3.6v5H9.4'/>
			</svg>
		</button>
	);
}

LinkedIn.Color = Color;

LinkedIn.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	url: PropTypes.string
};

LinkedIn.defaultProps = {
	color: Color.GREY_TO_ORIGINAL,
	borderless: false
};

export default LinkedIn;
