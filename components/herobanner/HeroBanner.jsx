import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextLabel from 'components/textlabel';
import Logo from 'components/logo';

import styles from './HeroBanner.scss';

const HeroHeight = {
	FULL: 'full',
	THREE_QUARTER: 'three-quarter',
	HALF: 'half',
	AUTO: 'auto'
};

const TextPosition = {
	BOTTOM: 'bottom',
	TOP: 'top',
	CENTER: 'center'
};

const TextGradient = {
	BOTTOM: 'bottom',
	TOP: 'top',
	NONE: null	
};

const TextJustify = {
	LEFT: 'left',
	RIGHT: 'right',
	CENTER: 'center'	
};

const ButtonDirection = {
	ROW: 'row',
	COLUMN: 'column'
};

const BackgroundPosition = {
	CENTER: 'center',
	TOP: 'top',
	BOTTOM: 'bottom'
};

const BackgroundGradient = {
	NONE: null,
	BOTTOM: 'bottom',
	TOP: 'top'
};

const LogoPosition = {
	LEFT: 'left',
	RIGHT: 'right',
	TOP: 'top'
};

const TitleLogoAlignment = {
	BOTTOM: 'bottom',
	TOP: 'top',
	CENTER: 'center'
};

class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		font: PropTypes.oneOf(Object.values(TextLabel.Font)),
		title_border: PropTypes.bool,
		text_position: PropTypes.oneOf(Object.values(TextPosition)),
		text_gradient: PropTypes.oneOf(Object.values(TextGradient)),
		text_justify: PropTypes.oneOf(Object.values(TextJustify)),
		buttons: PropTypes.array,
		button_border: PropTypes.bool,
		button_direction: PropTypes.string,
		image: PropTypes.object,
		background_image: PropTypes.string,
		background_position: PropTypes.oneOf(Object.values(BackgroundPosition)),
		hero_height: PropTypes.oneOf(Object.values(HeroHeight)),
		background_gradient: PropTypes.oneOf(Object.values(BackgroundGradient)),
		logo: PropTypes.string,
		logo_position: PropTypes.oneOf(Object.values(LogoPosition)),
		title_logo_alignment: PropTypes.oneOf(Object.values(TitleLogoAlignment))
	}

	static defaultProps = {
		background_position: BackgroundPosition.CENTER,
		font: TextLabel.AVENIR_BOLD,
		text_position: TextPosition.BOTTOM,
		text_gradient: TextGradient.BOTTOM,
		text_justify: TextJustify.LEFT,
		button_direction: ButtonDirection.ROW,
		hero_height: HeroHeight.FULL,
		background_gradient: BackgroundGradient.NONE,
		logo_position: LogoPosition.LEFT,
		title_logo_alignment: TitleLogoAlignment.BOTTOM
	}

	static HeroHeight = HeroHeight
	static TextPosition = TextPosition
	static TextGradient = TextGradient
	static TextJustify = TextJustify
	static ButtonDirection = ButtonDirection
	static BackgroundPosition = BackgroundPosition
	static BackgroundGradient = BackgroundGradient
	static LogoPosition = LogoPosition
	static TitleLogoAlignment = TitleLogoAlignment

	renderButton = (button, index) => {
		const button_container_classname = classnames(
			styles['button-container'],
			styles[this.props.button_border && 'border'],
			styles[this.props.button_direction === 'column' && 'column'],
			styles[this.props.button_direction === 'row' && 'row'],
		);

		const button_classname = classnames(
			styles['button'],
			styles[this.props.button_border && 'border']
		);

		return (	
			<li className={button_container_classname}>
				{button.label && 
					<span className={classnames(styles['label'])}>{button.label}</span>
				}
				<div className={button_classname}>
					<a href={button.url} target={button.target} onClick={button.onClick}>
						{button.text}
					</a>
				</div>
			</li>	
		);
	}


	render() {
		const {
			className,
			title,
			font,
			title_border,
			text_gradient,
			text_position,
			text_justify,
			buttons,
			button_border,
			image,
			background_image,
			background_position,
			background_gradient,
			hero_height,
			logo,
			logo_position,
			title_logo_alignment
		} = this.props;

		const container_classname = classnames(
			className,
			styles['container'],
			styles[text_position === 'top' && 'justify-top'],
			styles[text_position === 'bottom' && 'justify-bottom'],
			styles[hero_height === 'full' && 'full'],
			styles[hero_height === 'three-quarter' && 'three-quarter'],
			styles[hero_height === 'half' && 'half'],
			styles[hero_height === 'auto' && 'auto']
		);

		const background_style = {
			backgroundImage: background_image && `url(${background_image})`,
			backgroundPosition: background_position && background_position,
		};

		const title_container_classname = classnames(
			styles['title-container'],
			styles[title_border && 'border'],
			styles[text_gradient && `gradient-${text_gradient}`],
			styles[logo_position === 'left' && 'logo-left'],
			styles[logo_position === 'right' && 'logo-right']
		);

		const title_container_inner_classname = classnames(
			styles['title-container-inner'],
			styles[text_justify === 'left' && 'left'],
			styles[text_justify === 'right' && 'right'],
			styles[logo_position === 'top' && 'logo-top'],
			styles[title_logo_alignment === 'top' && 'align-top'],
			styles[title_logo_alignment === 'bottom' && 'align-bottom']
		);

		const background_gradient_classname = classnames(
			styles['background-gradient'],
			styles[background_gradient === 'top' && 'top'],
			styles[background_gradient === 'bottom' && 'bottom']
		);

		const logo_classname = classnames(
			styles['logo'],
			styles[logo_position === 'left' && 'left'],
			styles[logo_position === 'right' && 'right'],
		);

		const title_classname = classnames(
			styles['title'],
			styles[logo && 'with-logo']
		);

		return (
			<div className={container_classname}  style={background_style}>
				{ title &&
					<div className={title_container_classname}>
						<div className={title_container_inner_classname}>
							{ logo && logo_position !== 'right' &&
								<Logo
									className={logo_classname}
									url={logo}
								/>
							}
							<TextLabel
								className={title_classname}
								tag='h1'
								text={title}
								color={TextLabel.Color.WHITE}
								font={font}
							/>
							{ logo && logo_position === 'right' &&
								<Logo
									className={logo_classname}
									url={logo}
								/>
							}
						</div>
					</div>
				}
				{ buttons &&
					<ul className={classnames(styles['buttons-container'])}>
						{buttons.map(this.renderButton)}
					</ul>
				}
				{ image &&
					<div className={classnames(styles['image-container'])} onClick={image.onClick}>
						<img className={classnames(styles['image'])} src={image.src} />
					</div>
				}
				{ background_gradient && <div className={background_gradient_classname} /> }
			</div>
		);	
	}
}

export default HeroBanner;
