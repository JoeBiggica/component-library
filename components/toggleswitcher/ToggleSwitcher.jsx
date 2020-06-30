import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';

const context = createContext({
	active: false,
	onToggle: () => {},
});

const { Provider, Consumer } = context;

const ToggleButton = ({
	component,
	className,
	children,
	hide_on_toggle,
	handleClickOnChild
}) => (
	<Consumer>
		{({ active, onToggle }) => {
			if (active && hide_on_toggle) {
				return null;
			}

			const Comp = component;

			/**
			 * Intercept toggle function and fire custom event comming from an
			 * React component
			 * @typedef {object} ClickEvent
			 * @param {ClickEvent} event
			 */
			const handleClick = event => {
				if (typeof Comp === 'function' && handleClickOnChild) {
					handleClickOnChild(event);
				}
				onToggle(!active);
			};

			return (
				<Comp className={className} onClick={handleClick}>
					{children}
				</Comp>
			);
		}}
	</Consumer>
);

ToggleButton.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
	className: PropTypes.string,
	children: PropTypes.node,
	hide_on_toggle: PropTypes.bool,
	handleClickOnChild: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

ToggleButton.defaultProps = {
	component: 'button',
	hide_on_toggle: false,
	handleClickOnChild: false
};


class ToggleResponderComponent extends PureComponent {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		onToggle: PropTypes.func.isRequired,
		className: PropTypes.string,
		children: PropTypes.node,
		toggle_click_outside: PropTypes.bool,
	}

	static defaultProps = {
		toggle_click_outside: false,
	}

	constructor(props) {
		super(props);

		this.container_ref = React.createRef();
	}

	componentDidMount() {
		if (this.props.active) {
			if (this.props.toggle_click_outside) {
				document.addEventListener('mousedown', this.handleClickOutside);
			}

			document.addEventListener('keydown', this.handleKeyDown);
		}
	}

	componentDidUpdate(prev_props, prev_state) {
		if (this.props.active !== prev_props.active) {
			if (this.props.toggle_click_outside) {
				if (this.props.active) {
					document.addEventListener('mousedown', this.handleClickOutside);
				} else {
					document.removeEventListener('mousedown', this.handleClickOutside);
				}
			}

			if (this.props.active) {
				document.addEventListener('keydown', this.handleKeyDown);
			} else {
				document.removeEventListener('keydown', this.handleKeyDown);
			}
		}
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handleClickOutside = e => {
		const container = this.container_ref.current;

		if (container && !container.contains(e.target)) {
			this.props.onToggle(false);
		}
	}

	handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.onToggle(false);
		}
	}

	render() {
		return (
			<div
				className={this.props.className}
				ref={this.container_ref}
			>
				{this.props.children}
			</div>
		);
	}
}

const ToggleResponder = ({ children, className, toggle_click_outside }) => (
	<Consumer>
		{({ active, onToggle }) => (active ? (
			<ToggleResponderComponent
				className={className}
				toggle_click_outside={toggle_click_outside}
				active={active}
				onToggle={onToggle}
			>
				{children}
			</ToggleResponderComponent>
		) : null)}
	</Consumer>
);

ToggleResponder.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	toggle_click_outside: PropTypes.bool,
};


class ToggleSwitcher extends PureComponent {
	static propTypes = {
		children: PropTypes.node,
		onToggle: PropTypes.func,
	}

	static defaultProps = {
		onToggle: () => {},
	}

	state = {
		active: false,
	};

	handleToggle = active => {
		this.setState({
			active,
		});

		this.props.onToggle(active);
	};

	render() {
		return (
			<Provider
				value={{
					active: this.state.active,
					onToggle: this.handleToggle,
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export default ToggleSwitcher;
export { ToggleButton, ToggleResponder };
