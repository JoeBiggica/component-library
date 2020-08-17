import React from 'react';
import PropTypes from 'prop-types';

// Based off Online Usage: https://agency.reuters.com/en/platforms-delivery/reuters-brand-attribution-guidelines/online-usage.html
const Theme = {
	WHITE: {
		logo_color: '#FFFFFF',
		text_color: '#FFFFFF',
	},
	BLACK: {
		logo_color: '#000000',
		text_color: '#000000',
	},
};

function MartialBaseLogo({className, style, theme, title, icon, text}) {
	return (
		<div
			className={className}
			style={style}
			role='img'
			aria-label={title}
			title={title}
			alt={title}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.9 54.02">
				<title>{title}</title>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1">
						<path 
							class="cls-1" 
							d="M8.3,49.52,34.73,9,61.16,49.52Z"
							style={{
								fill: 'none',
								stroke: theme.logo_color,
								strokeMiterlimit: '10',
								strokeWidth: '9px',
							}}
						/>
						<polygon 
							class="cls-2" 
							points="87.15 53.98 62.72 16.48 52.51 32.15 44.96 27.24 62.72 0 97.9 53.98 87.15 53.98"
							style={{
								fill: theme.logo_color
							}}
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}

MartialBaseLogo.Theme = Theme;

MartialBaseLogo.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	theme: PropTypes.oneOf(Object.values(Theme)),
	title: PropTypes.string,
	icon: PropTypes.bool,
	text: PropTypes.bool
};

MartialBaseLogo.defaultProps = {
	theme: Theme.BLACK,
	title: 'MartialBase'
};

export default MartialBaseLogo;
