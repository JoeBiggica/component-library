import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Facebook from './facebook';
import Twitter from './twitter';
import YouTube from './youtube';
import Instagram from './instagram';
import LinkedIn from './linkedin';
import Rss from './rss';
import Email from './email';
import Link from './link';

import Color from './Color';
import styles from './SocialTools.scss';


const Platform = {
	FACEBOOK: 'facebook',
	TWITTER: 'twitter',
	YOUTUBE: 'youtube',
	INSTAGRAM: 'instagram',
	LINKEDIN: 'linkedin',
	RSS: 'rss',
	EMAIL: 'email',
	LINK: 'link',
};

class SocialTools extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		platforms: PropTypes.array.isRequired,
		urls: PropTypes.arrayOf(PropTypes.string),
		share: PropTypes.shape({
			title: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		}),
		color: PropTypes.oneOf(Object.values(Color)),
		borderless: PropTypes.bool,
	}

	static defaultProps = {
		urls: [],
		color: Color.GRAY_TO_ORIGINAL,
		borderless: false,
	}

	static Platform = Platform;
	static Color = Color;

	renderSocialButton(urls, share, color, borderless, platform, index) {

		const url = urls[index];

		const props = {
			key: platform,
			color,
			borderless,
			url,
		};

		switch (platform) {
			case Platform.FACEBOOK:
				return <Facebook {...props} share={share} />;

			case Platform.TWITTER:
				return <Twitter {...props} share={share} />;

			case Platform.YOUTUBE:
				return <YouTube {...props} />;

			case Platform.INSTAGRAM:
				return <Instagram {...props} />;

			case Platform.LINKEDIN:
				return <LinkedIn {...props} />;

			case Platform.RSS:
				return <Rss {...props} />;

			case Platform.EMAIL:
				return <Email {...props} share={share} />;

			case Platform.LINK:
				return <Link {...props} share={share} />;

			default:
				return null;
		}
	}

	render() {
		const { urls, share, color, borderless } = this.props;

		return (
			<div className={classnames(styles['container'], this.props.className)}>
				{this.props.platforms.map(
					this.renderSocialButton.bind(null, urls, share, color, borderless)
				)}
			</div>
		);
	}

}

export default SocialTools;
