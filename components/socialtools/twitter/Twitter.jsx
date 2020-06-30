import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import windowPopUp from '../windowPopUp';
import Color from '../Color';
import styles from '../SocialTools.scss';


function shareClickHandler(share) {
	const encoded_url = encodeURIComponent(share.url);
	const encoded_title = encodeURIComponent(share.title);
	const url = `https://www.twitter.com/share?url=${encoded_url}&text=${encoded_title}`;
	return windowPopUp.bind(null, url, 600, 400);
}

function urlClickHandler(url) {
	return () => {
		window.open(url, '_blank');
	};
}

function Twitter({className, color, borderless, share, url}) {
	const composed_className = classnames(
		styles.icon,
		styles.twitter,
		styles[color],
		borderless ? styles.borderless : undefined,
		className,
	);

	const click_handler = share ? shareClickHandler(share) : urlClickHandler(url);

	return (
		<button
			aria-label='Twitter'
			type='button'
			className={composed_className}
			onClick={click_handler}
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
				<path d='M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115a210.29 210.29 0 0 1-66.705 25.49c-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433a104.614 104.614 0 0 1-47.577-13.139c-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103a105.245 105.245 0 0 1-27.674 3.687c-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z'/>
			</svg>
		</button>
	);
}

Twitter.Color = Color;

Twitter.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	share: PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}),
	url: PropTypes.string
};

Twitter.defaultProps = {
	color: Color.GRAY_TO_ORIGINAL,
	borderless: false
};

export default Twitter;
