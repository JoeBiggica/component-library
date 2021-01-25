import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';

import styles from './TextCard.scss';

function TextCard(props) {
	const {
		className,
		title,
		body_items,
		rows,
		font
	} = props;

	function renderBodyItem(item, index) {
		switch(item.type) {
			case 'paragraph': 
				return (
					<TextLabel
						className={classnames(styles['paragraph'])}
						key={`p-${index}`}
						tag='p'
						text={item.content}
						color={TextLabel.Color.GREY}
						font={font}
					/>
				);
			default:
				return null;
		}
	}

	function renderRow(row, index) {
		return (
			<tr className={classnames(styles['row'])} key={`row-${index}`}>
				<TextLabel
					className={classnames(styles['name'])}
					tag='td'
					text={row.name}
					color={TextLabel.Color.BLACK}
					font={font}
				/>
				<TextLabel
					className={classnames(styles['value'])}
					tag='td'
					text={row.value}
					color={TextLabel.Color.GREY}
					font={font}
				/>
			</tr>
		);
	}

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
			{body_items &&
				<div className={classnames(styles['body'])}>
					{body_items.map(renderBodyItem)}
				</div>
			}
			{rows && rows.length > 0 &&
				<table className={classnames(styles['table'])}>
					<tbody>
						{rows.map(renderRow)}
					</tbody>
				</table>
			}
		</div>
	);
}

TextCard.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	body_items: PropTypes.array,
	rows: PropTypes.array,
	font: PropTypes.oneOf(Object.values(TextLabel.Font))
}

export default TextCard;