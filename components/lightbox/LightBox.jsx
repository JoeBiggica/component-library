import React from 'react';
import PropTypes from 'prop-types';

import Close from 'components/icons/close.svg';

import styles from './LightBox.scss';

function LightBox(props) {
	const {
		children,
		onClick
	} = props;


	return (
		<div className={styles['container']} onClick={onClick}>
			<div className={styles['inner']}>
				<Close className={styles['close']} />
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
