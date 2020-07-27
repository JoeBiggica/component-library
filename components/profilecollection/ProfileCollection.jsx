import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextLabel from 'components/textlabel';

import styles from './ProfileCollection.scss';

function ProfileCollection(props) {

	const {
		className,
		profiles,
		round,
		drop_shadow,
		show_name,
		width
	} = props;

	const renderProfile = (profile, index) => {
		const {
			image_url,
			name,
			url
		} = profile;
		console.log(profile);
		const {
			round,
			drop_shadow,
			show_name,
			width
		} = props;

		const image_classname = classnames(
			styles['image'],
			styles[round && 'round'],
			styles[drop_shadow && 'shadow']
		);

		const image_style = {
			width: width,
			height: width,
			backgroundImage: `url(${image_url})`
		};

		if (url) {
			return (
				<a 
					key={`profile-${index}`} 
					className={image_classname} 
					style={image_style} 
					href={url}
				/>
			)
		}

		return (
			<div 
				key={`profile-${index}`} 
				className={image_classname} 
				style={image_style} 
			/>
		);
	}

	return (
		<div className={classnames(styles['container'], className)}>
			{ profiles && profiles.map(renderProfile) }
		</div>
	);	
}

ProfileCollection.propTypes = {
	className: PropTypes.string,
	profiles: PropTypes.array,
	round: PropTypes.bool,
	drop_shadow: PropTypes.bool,
	show_name: PropTypes.bool,
	width: PropTypes.string
}

ProfileCollection.defaultProps = {
	width: '100px'
}

export default ProfileCollection;
