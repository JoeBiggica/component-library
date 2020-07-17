import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LightBox from 'components/lightbox';

import styles from './Gallery.scss';

export default class Gallery extends Component {

	propTypes = {
		style: PropTypes.object,
		className: PropTypes.string,
		images: PropTypes.array
	}

	state = {
		lightbox_active: false
	}

	componentDidMount() {
		document.addEventListener('keyup', e => {
			if (e.keyCode === 13) this.closeLightBox(); // enter
			if (e.keyCode === 27) this.closeLightBox(); // esc
		});
	}

	openLightBox = image => {
		const {
			url,
			long_image
		} = image;

		this.setState({
			lightbox_active: true,
			lightbox_image: {
				url,
				long_image
			}
		});
		document.body.style['overflow-x'] = 'hidden';
		document.body.style['overflow-y'] = 'hidden';
	}

	closeLightBox = () => {
		this.setState({ 
			lightbox_active: false 
		});
		document.body.style['overflow-x'] = '';
		document.body.style['overflow-y'] = '';
	}

	renderLightBoxImage = image => {
		const {
			url,
			long_image
		} = image;

		const image_styles = {
			backgroundImage: `url(${url})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		if (long_image) {
			return (
				<div className={classnames(styles['lightbox-image-container'])}>
					<img src={url} alt={url} />
				</div>
			);
		}

		return (
			<div className={classnames(styles['lightbox-image-container'])}>
				<div className={classnames(styles['lightbox-image'])} style={image_styles} />
			</div>
		);
	}

	renderImage = (image, index) => {
		const {
			url,
			long_image
		} = image;

		if (long_image) {
			const long_image_styles = {
				backgroundImage: `url(${url})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			};

			const lightbox_image = {
				url,
				long_image
			}

			return (
				<div 
					key={`image-${index}`}
					className={classnames(styles['long-image'])} 
					style={long_image_styles}
					onClick={() => this.openLightBox(lightbox_image)}
				/>
			);
		}

		const lightbox_image = {
			url
		}

		return (
			<img 
				key={`image-${index}`}
				src={url} 
				loading='lazy' 
				onClick={() => this.openLightBox(lightbox_image)}
			/>
		);
	}

	render() {
		const {
			style,
			className,
			images
		} = this.props;

		const {
			lightbox_active,
			lightbox_image
		} = this.state;

		return(
			<div 
				style={style}
				className={classnames(styles['container'], className)}
			>
				<div className={classnames(styles['image-list'])}>
					{ images && images.map(this.renderImage) }
				</div>
				{ lightbox_active && 
					<LightBox
						onClick={() => this.closeLightBox()}
					>
						{ this.renderLightBoxImage(lightbox_image) }
					</LightBox>
				}
			</div>
		)
	}
}