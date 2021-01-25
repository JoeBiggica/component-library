import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './GoogleMap.scss';

function GoogleMap(props) {
	const {
		className,
		width,
		height
	} = props;

	const mapRef = useRef(null);

	useEffect(() => {
		const map_el = mapRef.current;
		const map = new google.maps.Map(map_el, {
		  center: {lat: -34.397, lng: 150.644},
		  zoom: 13
		});
	});

	const container_classname = classnames(
		styles['container'],
		className
	);

	const container_style = {
		width: `${width}px`,
		height: `${height}px`
	}

	return (
		<div className={container_classname} style={container_style}>
			<div style={container_style} ref={mapRef} />
		</div>
	);
}

GoogleMap.propTypes = {
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string
};

GoogleMap.defaultProps = {
	width: '500',
	height: '500'
}

export default GoogleMap;