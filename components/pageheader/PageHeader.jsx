import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextLabel from 'components/textlabel';

import styles from './PageHeader.scss';


function PageHeader(props) {

	const {
		className,
		title,
		font_color,
		background,
		background_color,
		background_skew,
		underline,
		underline_color
	} = props;

	const title_classname = classnames(
		className,
		styles['title'],
		styles[background && !background_skew && 'padding']
	);

	const background_classname = classnames(
		styles['background'],
		styles[background_skew && 'skew']
	);

	const background_style = {
		background: background_color
	};

	const underline_style = {
		background: underline_color
	}

	return (
		<div className={classnames(styles['container'], className)}>
			<div className={classnames(styles['inner'])}>
				<TextLabel
					className={title_classname}
					font={TextLabel.Font.FUTURA}
					text={title}
					color={font_color}
					tag='h2'
				/>
				{ underline && 
					<div 
						className={classnames(styles['underline'])} 
						style={underline_style}
					/> 
				}
				{ background && 
					<div 
						className={background_classname} 
						style={background_style}
					/> 
				}
			</div>
		</div>
	);	
}

PageHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	font_color: PropTypes.string,
	background: PropTypes.bool,
	background_color: PropTypes.string,
	background_skew: PropTypes.bool,
	underline: PropTypes.bool,
	underline_color: PropTypes.string
}

export default PageHeader;
