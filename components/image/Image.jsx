import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Image.scss';

const FillMode = {
	EXACT: 'exact',
	FIT: 'fit',
	COVER: 'cover',
};

const Placeholder = {
	LOGO_LIGHT: 'logo-light',
	LOGO_DARK: 'logo-dark',
};

class Image extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		src: PropTypes.string,
		is_amp: PropTypes.bool,
		alt: PropTypes.string,
		aspect_ratio: PropTypes.number,
		fill_mode: PropTypes.string,
		placeholder: PropTypes.oneOf([false, ...Object.values(Placeholder)]),
		forwarded_ref: PropTypes.object,
	};

	static defaultProps = {
		fill_mode: FillMode.EXACT,
		placeholder: Placeholder.LOGO_LIGHT,
		is_amp: false,
	};

	static FillMode = FillMode;

	static Placeholder = Placeholder;

	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			src: this.props.src,
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.src !== state.src) {
			return {
				src: props.src,
				loaded: false,
			};
		}

		return null;
	}

	handleImageLoad = () => {
		this.setState({
			loaded: true,
		});
	};

	render() {
		const {
			className,
			style,
			alt,
			aspect_ratio,
			fill_mode,
			placeholder,
			forwarded_ref,
			is_amp,
		} = this.props;

		const { src, loaded } = this.state;

		const container_style = aspect_ratio
			? {
					height: 0,
					paddingBottom: `${(1 / aspect_ratio) * 100}%`,
			  }
			: undefined;

		return (
			<div className={className} style={style} ref={forwarded_ref}>
				<div className={styles['size-container']}>
					<div
						className={classnames(
							styles['image-container'],
							aspect_ratio && styles['lock-ratio'],
							placeholder && styles[placeholder],
							loaded && styles['loaded']
						)}
						style={container_style}
					>
						{is_amp
							? src && (
									<amp-img
										key={src}
										className={classnames(styles['image'], styles[fill_mode])}
										alt={alt}
										src={src}
										title={alt}
										onLoad={this.handleImageLoad}
										layout='fill'
									/>
							  )
							: src && (
									<img
										key={src}
										className={classnames(styles['image'], styles[fill_mode])}
										src={src}
										alt={alt}
										title={alt}
										onLoad={this.handleImageLoad}
									/>
							  )}
					</div>
				</div>
			</div>
		);
	}
}

export default Image;
