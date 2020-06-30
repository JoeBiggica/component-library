import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './BackdropImage.scss';


const FillMode = {
	EXACT: 'exact',
	FIT: 'fit',
	COVER: 'cover',
};

const FillPosition = {
	TOP_CENTER: 'top-center',
	CENTER: 'center',
	BOTTOM_CENTER: 'bottom-center',
};

const Placeholder = {
	LOGO_LIGHT: 'logo-light',
	LOGO_DARK: 'logo-dark',
};

class BackdropImage extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		src: PropTypes.string,
		srcSet: PropTypes.string,
		aspect_ratio: PropTypes.number,
		fill_mode: PropTypes.string,
		fill_position: PropTypes.string,
		placeholder: PropTypes.oneOf([
			false,
			...Object.values(Placeholder),
		]),
		forwarded_ref: PropTypes.object,
	}

	static defaultProps = {
		fill_mode: FillMode.COVER,
		fill_position: FillPosition.TOP_CENTER,
		placeholder: Placeholder.LOGO_LIGHT,
	}

	static FillMode = FillMode

	static FillPosition = FillPosition

	static Placeholder = Placeholder

	constructor(props) {
		super(props);

		this.state = {
			src: this.props.src,
			srcSet: this.props.srcSet,
			loaded_src: null,
			loaded: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.src !== state.src || props.srcSet !== state.srcSet) {
			return {
				src: props.src,
				srcSet: props.srcSet,
				loaded_src: null,
				loaded: false,
			};
		}

		return null;
	}

	handleImageLoad = e => {
		this.setState({
			loaded_src: e.target.currentSrc || e.target.src,
			loaded: true,
		});
	}

	render() {
		const {
			className,
			style,
			aspect_ratio,
			fill_mode,
			fill_position,
			placeholder,
			forwarded_ref,
		} = this.props;

		const {
			src,
			srcSet,
			loaded_src,
			loaded,
		} = this.state;

		const size_container_style = aspect_ratio ? {
			height: 0,
			paddingBottom: `${1 / aspect_ratio * 100}%`,
		} : undefined;

		const image_style = loaded_src ? {
			backgroundImage: `url(${loaded_src})`,
		} : undefined;

		return (
			<div
				className={className}
				style={style}
				ref={forwarded_ref}
			>
				<div
					className={classnames(
						styles['size-container'],
						placeholder && styles[placeholder],
					)}
					style={size_container_style}
				>
					{src && 
						<img
							key={src}
							src={src}
							srcSet={srcSet}
							onLoad={this.handleImageLoad}
						/>
					}
					{loaded &&
						<div
							className={classnames(
								styles['image'],
								styles[fill_mode],
								styles[fill_position]
							)}
							style={image_style}
						/>
					}
				</div>
			</div>
		);
	}
}

export default BackdropImage;
