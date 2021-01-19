import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Logo.scss';

const Shape = {
	CIRCLE: 'CIRCLE',
	SQUARE: 'SQUARE'
};

const shape_values = Object.values(Shape);

function Logo(props) {
	const {
		className,
		url,
		shape
	} = props

	const container_classname = classnames(
		styles['container'],
		styles[shape === 'circle' && 'circle'],
		styles[shape === 'square' && 'square'],
		className
	);

	const logo_classname = classnames(
		styles['logo']
	);

	const logo_syles = {
		backgroundImage: `url(${url})`
	};

	return (
		<div className={container_classname}>
			<div className={logo_classname} style={logo_syles} />
		</div>
	)
}

Logo.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string,
	shape: PropTypes.oneOf(shape_values)
};

Logo.defaultProps = {
	shape: Shape.SQUARE
};

Logo.Shape = Shape;

export default Logo;
