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

function Rss({className, color, borderless, url}) {
	const composed_className = classnames(
		styles.icon,
		styles.rss,
		styles[color],
		borderless ? styles.borderless : undefined,
		className,
	);

	return (
		<button
			aria-label='RSS'
			type='button'
			className={composed_className}
			onClick={urlClickHandler(url)}
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.01 17.01'>
				<path d='M3.85 13.15a2.24 2.24 0 0 1 0 3.18 2.26 2.26 0 0 1-3.19 0 2.24 2.24 0 0 1 0-3.18 2.25 2.25 0 0 1 3.19 0zm0 0zM.66 16.33zM0 5.78V9a7.92 7.92 0 0 1 5.62 2.34A7.94 7.94 0 0 1 8 17h3.26a11.2 11.2 0 0 0-3.33-7.92A11.18 11.18 0 0 0 0 5.78zM0 0v3.25A13.78 13.78 0 0 1 13.75 17H17a17 17 0 0 0-5-12A17 17 0 0 0 0 0z'/>
			</svg>
		</button>
	);
}

Rss.Color = Color;

Rss.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	url: PropTypes.string
};

Rss.defaultProps = {
	color: Color.GRAY_TO_ORIGINAL,
	borderless: false
};

export default Rss;
