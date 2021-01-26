import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './GoogleMap.scss';

const MapStyle = {
	DEFAULT: '',
	GREY: 'dd6eb82843a22cad',
	DARK: '6ac03c9227335464'
};

function GoogleMap(props) {
	const {
		className,
		width,
		height,
		address,
		map_style
	} = props;

	const mapRef = useRef(null);

	function initMap(container) {
		const map = new google.maps.Map(container, {
			zoom: 15,
			center: { lat: -34.397, lng: 150.644 },
			mapId: map_style
		});

		const geocoder = new google.maps.Geocoder();

		geocodeAddress(geocoder, map);
	}

	function geocodeAddress(geocoder, resultsMap) {
		geocoder.geocode({ address: address }, (results, status) => {
			if (status === "OK") {
				resultsMap.setCenter(results[0].geometry.location);
				new google.maps.Marker({
					map: resultsMap,
					position: results[0].geometry.location,
				});
			} else {
				console.warn("Geocode was not successful for the following reason: " + status);
			}
		});
	}


	useEffect(() => {
		const map_container = mapRef.current;
		if (typeof google !== 'undefined' && google.maps) {
			initMap(map_container);
		} else {
			console.warn('Google Maps API script not loaded properly.');
		}
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

GoogleMap.MapStyle = MapStyle;

GoogleMap.propTypes = {
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	address: PropTypes.string,
	map_style: PropTypes.oneOf(Object.values(MapStyle))
};

GoogleMap.defaultProps = {
	width: '400',
	height: '400',
	address: '3 Times Square, New York NY',
	map_style: MapStyle.DEFAULT
}

export default GoogleMap;