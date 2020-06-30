import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextLabel from 'components/textlabel';
import Digits from 'components/markets/digits';
import ScrollList from 'components/scrolllist';
import classnames from 'classnames';

import styles from './TickerTape.scss';

class TickerTape extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		quotes: PropTypes.array,
		links: PropTypes.bool,
	};

	static defaultProps = {
		links: true,
		scroll: true,
	}

	renderItem = (quote, index) => {
		let fixed_decimals = 2;
		let last_plus_sign = false;
		let link = this.props.links;
		let net_change = quote.net_change;
		let percent_change = quote.percent_change;

		// Bonds
		if (quote.yield) {
			fixed_decimals = 3;
			last_plus_sign = true;
			link = false;
			net_change = quote.yield_net_change;
			percent_change = quote.yield_percent_change;

		}
		
		//Currencies
		if (quote.symbol) {
			fixed_decimals = 4;
		}

		return (
			<div
				key={`quote-${index}`}
				className={styles['quote-item']}
			>
				<TextLabel
					className={styles['name']}
					text={quote.name || quote.ric}
					font={TextLabel.Font.MEDIUM}
					color={link ? TextLabel.Color.BLACK_TO_ORANGE :TextLabel.Color.BLACK}
					tag={link ? 'a' : 'span'}
					href={link ? `/quote/${quote.symbol || quote.ric}` : undefined}

				/>
				<Digits 
					className={styles['last']} 
					value={quote.last || quote.yield} 
					fixed_decimals={fixed_decimals}
					plus_sign={last_plus_sign}
					color={Digits.Color.BLACK}
					font={Digits.Font.REGULAR}
				/>
				<Digits 
					className={styles['percent-change']} 
					value={(percent_change)} 
					change_color
					fixed_decimals={fixed_decimals}
					unit='%'
					plus_sign
					color={Digits.Color.BLACK}
					font={Digits.Font.REGULAR}
				/>
			</div>
		);
	}

	render() {
		const {
			className,
			style,
			quotes,
		} = this.props;

		return (
			<div
				className={className}
				style={style}
			>
				<ScrollList
					className={styles['scroll-list']}
					items={quotes}
					button_theme={ScrollList.ButtonTheme.WHITE_CIRCLE}
					prev_button_className={styles['prev']}
					next_button_className={styles['next']}
					renderItem={this.renderItem}
				/>
			</div>
		);
	}
}

export default TickerTape;