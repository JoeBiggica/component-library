import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Logo.scss';

function Logo(props) {
	const {
		className,
		style,
		url,
		background_color,
	} = props

	const container_classname = classnames(
		styles['container'],
		className
	);

	const container_styles = {
		backgroundColor: background_color,
		...style
	}

	const logo_classname = classnames(
		styles['logo']
	);

	const logo_syles = {
		backgroundImage: `url(${url})`
	};

	return (
		<div className={container_classname} style={container_styles}>
			<div className={logo_classname} style={logo_syles} />
		</div>
	)
}

Logo.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	url: PropTypes.string,
	background_color: PropTypes.string,
};

Logo.defaultProps = {
	background_color: '#FFFFFF'
};

export default Logo;
