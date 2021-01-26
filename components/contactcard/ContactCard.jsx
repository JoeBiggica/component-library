import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';
import GoogleMap from 'components/googlemap';

import styles from './ContactCard.scss';

function ContactCard(props) {
	const {
		className,
		title,
		street,
		city,
		state,
		zipcode,
		phone,
		email,
		show_map,
		font
	} = props;


	const container_classname = classnames(
		styles['container'],
		className
	);

	return (
		<div className={container_classname}>
			{title &&
				<TextLabel
					className={classnames(styles['title'])}
					tag='h3'
					text={title}
					color={TextLabel.Color.BLACK}
					font={font}
				/>
			}

			{show_map &&
				<GoogleMap
					className={classnames(styles['map'])}
					height='200px'
					address={`${street}, ${city} ${state}, ${zipcode}`}
					map_style={GoogleMap.MapStyle.GREY}
				/>
			}

			{(street || city || state) &&

				<div className={classnames(styles['info-container'])}>
					<TextLabel
						className={classnames(styles['header'])}
						tag='h4'
						text='Address'
						color={TextLabel.Color.BLACK}
						font={font}
					/>

					{street &&
						<TextLabel
							className={classnames(styles['text'])}
							tag='p'
							text={`${street},`}
							color={TextLabel.Color.GREY}
							font={font}
						/>
					}
					{city && state &&
						<TextLabel
							className={classnames(styles['text'])}
							tag='p'
							text={`${city}, ${state} ${zipcode}`}
							color={TextLabel.Color.GREY}
							font={font}
						/>
					}
				</div>
			}



			{phone &&
				<div className={classnames(styles['info-container'])}>
					<TextLabel
						className={classnames(styles['header'])}
						tag='h4'
						text='Phone'
						color={TextLabel.Color.BLACK}
						font={font}
					/>
					<TextLabel
						className={classnames(styles['text'])}
						tag='p'
						text={phone}
						color={TextLabel.Color.GREY}
						font={font}
					/>
				</div>
			}

			{email &&
				<div className={classnames(styles['info-container'])}>
					<TextLabel
						className={classnames(styles['header'])}
						tag='h4'
						text='Email'
						color={TextLabel.Color.BLACK}
						font={font}
					/>
					<TextLabel
						className={classnames(styles['text'])}
						tag='p'
						text={email}
						color={TextLabel.Color.GREY}
						font={font}
					/>
				</div>
			}
		</div>
	);
}

ContactCard.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	street: PropTypes.string,
	city: PropTypes.string,
	state: PropTypes.string,
	zipcode: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	show_map: PropTypes.bool,
	font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

export default ContactCard;