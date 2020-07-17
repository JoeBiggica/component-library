import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './LightBox.scss';

function LightBox(props) {
	const {
		children,
		onClick
	} = props;


	return (
		<div className={classnames(styles['container'])} onClick={onClick}>
			<div className={classnames(styles['inner'])}>
				{children}
			</div>
		</div>
	);
}

LightBox.propTypes = {
	children: PropTypes.object,
	onClick: PropTypes.func
};

export default LightBox;
