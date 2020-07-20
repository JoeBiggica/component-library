import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Close from 'components/icons/close.svg';

import styles from './LightBox.scss';

function LightBox(props) {
	const {
		children,
		onClick
	} = props;


	return (
		<div className={classnames(styles['container'])} onClick={onClick}>
			<div className={classnames(styles['inner'])}>
				<Close className={classnames(styles['close'])} />
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
