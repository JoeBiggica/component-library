import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LightBoxImage from 'components/lightboximage';
import SpringImage from 'components/springimage';

import styles from './Gallery.scss';

export default class Gallery extends Component {

	static propTypes = {
		style: PropTypes.object,
		className: PropTypes.string,
		images: PropTypes.array,
		spring: PropTypes.bool,
		image_style: PropTypes.object
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

	renderImage = (image, index) => {
		const {
			url,
			small_url,
			long_image
		} = image;

		const {
			spring,
			image_style,
		} = this.props;

		const lightbox_image = {
			url
		};

		if (spring) {
			return (
				<div
					key={`image-${index}`}
					className={classnames(styles['spring-image-container'])}
					onClick={() => this.openLightBox(lightbox_image)}
				>
					<SpringImage
						className={classnames(styles['spring-image'])}
						image_url={small_url ? small_url : url}
					/>
				</div>
			);
		}

		if (long_image) {
			const long_image_styles = {
				backgroundImage: `url(${url})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			};

			lightbox_image.long_image = true;

			return (
				<div
					key={`image-${index}`}
					className={classnames(styles['long-image'])}
					style={long_image_styles}
					onClick={() => this.openLightBox(lightbox_image)}
				/>
			);
		}

		return (
			<img
				key={`image-${index}`}
				src={small_url ? small_url : url}
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

		return (
			<div
				style={style}
				className={classnames(styles['container'], className)}
			>
				<div className={classnames(styles['image-list'])}>
					{images && images.map(this.renderImage)}
				</div>
				{ lightbox_active &&
					<LightBoxImage
						image={lightbox_image}
						onClick={() => this.closeLightBox()}
					/>
				}
			</div>
		)
	}
}