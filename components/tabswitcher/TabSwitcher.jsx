import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const context = createContext({
	current_tab_id: '',
	changeTab: () => {},
});

const { Provider, Consumer } = context;


const ClickableTab = ({ id, className, className_active, children }) => (
	<Consumer>
		{({ current_tab_id, changeTab }) => {
			const composed_className = classnames(className, {
				[className_active]: current_tab_id === id,
			});

			return (
				<div className={composed_className} onClick={() => changeTab(id)}>
					{children}
				</div>
			);
		}}
	</Consumer>
);

ClickableTab.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	className_active: PropTypes.string,
	children: PropTypes.node,
};


const HoverableTab = ({ id, className, className_active, children }) => (
	<Consumer>
		{({ current_tab_id, changeTab }) => {
			const active = current_tab_id === id;

			const composed_className = classnames(className, {
				[className_active]: active,
			});

			return (
				<div
					className={composed_className}
					onMouseEnter={() => changeTab(id)}
					onMouseLeave={() => changeTab()}
					onFocus={() => changeTab(id)}
					onBlur={e => {
						if (!e.currentTarget.contains(e.relatedTarget)) {
							changeTab();
						}
					}}
				>
					{children}
				</div>
			);
		}}
	</Consumer>
);

HoverableTab.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	className_active: PropTypes.string,
	children: PropTypes.node,
};

const TabPanel = ({ id, children }) => (
	<Consumer>
		{({ current_tab_id }) => (current_tab_id === id ? children : null)}
	</Consumer>
);

TabPanel.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
};


class TabSwitcher extends Component {
	static propTypes = {
		children: PropTypes.node,
	}

	state = {
		current_tab_id: '',
	};

	changeTab = tab_id => {
		this.setState({
			current_tab_id: tab_id,
		});
	};

	render() {
		return (
			<Provider
				value={{
					current_tab_id: this.state.current_tab_id,
					changeTab: this.changeTab,
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export default TabSwitcher;
export { ClickableTab, HoverableTab, TabPanel };
