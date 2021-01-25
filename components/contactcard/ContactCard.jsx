import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';

import styles from './ContactCard.scss';

 // <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0FDdhCwYz5HXDhf5Pe0p0i3juGwy58ts&callback=initMap"
 //  type="text/javascript"></script>

function ContactCard(props) {
	const {
		className,
		title,
		street,
		city,
		state,
		zipcode,
		email,
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

			{street || city || state && 

				<div className={classnames(styles['address-container'])}>
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
							tag='h3'
							text={street}
							color={TextLabel.Color.GREY}
							font={font}
						/>
					}
				</div>
			}

			

			{title &&
				<TextLabel
					className={classnames(styles['title'])}
					tag='h3'
					text={title}
					color={TextLabel.Color.BLACK}
					font={font}
				/>
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
	email: PropTypes.string,
	font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

export default ContactCard;