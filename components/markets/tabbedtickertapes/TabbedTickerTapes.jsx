import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextLabel from 'components/textlabel';
import Tabs from 'components/tabs';
import TickerTape from 'components/markets/tickertape';

import styles from './TabbedTickerTapes.scss';

class TabbedTickerTapes extends PureComponent {

	static propTypes = {
		className: PropTypes.className,
		style: PropTypes.object,
		quote_lists: PropTypes.array,
		tabs: PropTypes.array,
		links: PropTypes.bool,
		dark_mode: PropTypes.bool,
		dart_zone: PropTypes.string,
		adstest: PropTypes.string,
		onTabClick: PropTypes.func,
	};

	static defaultProps = {
		links: true,
		quote_lists: [],
		onTabClick: () => {},
	}

	state = {
		active_tab_index: 0,
	}
	
	handleTabClick = item => {
		this.props.onTabClick(item);

		const active_tab_index = this.props.tabs.indexOf(item);

		this.setState({
			active_tab_index,
		});
	}

	handleSelectChange = select => {
		const index = select.target.selectedIndex;
		const selected_tab = this.props.tabs[index];
		const item = {
			id: selected_tab.id,
			name: selected_tab.name,
		};

		this.props.onTabClick(item);
		this.setState({ active_tab_index: index });
	}

	render() {
		const {
			className,
			style,
			tabs,
			quote_lists,
			links,
			scroll,
			dark_mode,
			dart_zone,
			adstest,
		} = this.props;

		const tab_index = this.state.active_tab_index;
		const quotes = quote_lists[tab_index] || quote_lists[0];
		
		return (
			<div
				className={className}
				style={style}
			>
				<div className={styles['tabs-container']}>
					{tabs &&
						<Tabs
							className={styles['tabs']}
							items={tabs}
							initial_index={tab_index}
							font='SMALL_ALL_CAPS_NO_SPACING'
							current_color='BLACK'
							track_position='top'
							triangle_marker
							dark_mode={dark_mode}
							onClick={this.handleTabClick}
						/>
					}
				</div>
				
				{quotes && 
					<TickerTape
						key={`ticker-tape-${tab_index}`}
						className={styles['tape-container']}
						quotes={quotes}
						links={links}
					/>
				}
			</div>
		);
	}
}

export default TabbedTickerTapes;
