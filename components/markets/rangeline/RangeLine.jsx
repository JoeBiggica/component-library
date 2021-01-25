import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextLabel from 'components/textlabel';

import styles from './RangeLine.scss';

class RangeLine extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		values: PropTypes.shape({
			min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			actual: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		}).isRequired,
		type: PropTypes.string,
		styleset: PropTypes.object,
		x_labels: PropTypes.array,
		dark_mode: PropTypes.bool,
	};

	static defaultProps = {
		type: 'solid',
		styleset: {
			line: {
				height: '6px',
				color: '#EBEBEB',
			},
			marker: {
				color: '#000000',
			}
		}
	}

	renderLabel = label => {
		return (
			<TextLabel
				className={styles['label']}
				text={label}
				font={TextLabel.Font.REGULAR}
				color={TextLabel.Color.GREY}
				tag='div'
				key={label}
			/>
		);
	}

	render() {
		const { 
			className,
			style, 
			values, 
			type, 
			styleset,
		} = this.props;

		const min = Number(values.min);
		const max = Number(values.max);
		const actual = Number(values.actual);

		const actual_percentage = ((actual - min) / (max - min)) * 100;
		let percentage = actual_percentage;
		if (actual_percentage > 100) {
			percentage = 95;
		}
		if (actual_percentage < 0) {
			percentage = 5;
		}

		const container_classname = classnames(
			styles['container'],
			className,
		);
		const line_classname = classnames(
			styles['line'],
			type === 'measured' && styles['measured'],
		);
		const marker_classname = classnames(
			styles['marker'],
			type === 'measured' && styles['measured'],
		);
		const line_styles = {
			height: styleset.line.height,
			backgroundColor: styleset.line.color,
		};
		const bar_styles = {
			height: '9px',
			width: styleset.line.height,
			backgroundColor: styleset.line.color,
		};
		const marker_styles = {
			borderBottom: type === 'solid' && `9px solid ${styleset.marker.color}`,
			borderTop: type === 'measured' && `9px solid ${styleset.marker.color}`,
			left: `${percentage - 4}%`
		};

		return (
			<div className={container_classname} style={style}>
				<div className={line_classname} style={line_styles}>
					{ type === 'measured' &&
						<>
							<div style={bar_styles} key='bar-1' />
							<div style={bar_styles} key='bar-2' />
							<div style={bar_styles} key='bar-3' />
							<div style={bar_styles} key='bar-4' />
							<div style={bar_styles} key='bar-5' />
						</>
					}
				</div>
				<div className={marker_classname} style={marker_styles} />
				{ this.props.x_labels && 
					<div className={styles('labels')}>
						{ this.props.x_labels.map(this.renderLabel.bind(this)) }
					</div>
				}
			</div>
		);
	}
}

export default RangeLine;
