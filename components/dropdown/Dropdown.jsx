import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CaretUp from 'components/icons/caretup.svg';
import styles from './Dropdown.scss';

const context = createContext({
	toggle: false,
	toggleMenu: () => {},
});

const { Provider, Consumer } = context;

const DropdownToggle = ({ className, className_active, children, label, labelledBy }) => (
	<Consumer>
		{({ toggle, toggleMenu }) => {
			const composed_className = classnames(
				styles.toggle,
				className,
				toggle && className_active
			);

			return (
				<button
					aria-label={label}
					aria-labelledby={labelledBy}
					aria-expanded={toggle}
					type='button'
					className={composed_className}
					onClick={toggleMenu}
				>
					{children}
				</button>
			);
		}}
	</Consumer>
);

DropdownToggle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	className_active: PropTypes.string,
	label: PropTypes.string,
	labelledBy: PropTypes.string
};

const DropdownMenu = ({ className, className_caret, theme, children }) => (
	<Consumer>
		{({ toggle, toggleMenu }) => (toggle &&
			<DropdownMenuWrapper
				className={className}
				className_caret={className_caret}
				theme={theme}
				toggle={toggle}
				toggleMenu={toggleMenu}
			>
				{children}
			</DropdownMenuWrapper>
		)}
	</Consumer>
);

DropdownMenu.Theme = {
	NONE: 'none',
	DEFAULT: 'default',
};

DropdownMenu.propTypes = {
	theme: PropTypes.oneOf(Object.values(DropdownMenu.Theme)),
	children: PropTypes.node,
	className: PropTypes.string,
	className_caret: PropTypes.string,
};


class DropdownMenuWrapper extends PureComponent {

	static propTypes = {
		theme: PropTypes.oneOf(Object.values(DropdownMenu.Theme)),
		children: PropTypes.node,
		className: PropTypes.string,
		className_caret: PropTypes.string,
		toggle: PropTypes.bool,
		toggleMenu: PropTypes.func.isRequired,
	}

	static defaultProps = {
		theme: DropdownMenu.Theme.DEFAULT,
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside);
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	componentDidUpdate(prev_props) {
		if (this.props.toggle !== prev_props.toggle) {
			if (this.props.toggle) {
				document.addEventListener('click', this.handleClickOutside);
				document.addEventListener('keydown', this.handleKeyDown);
			} else {
				document.removeEventListener('click', this.handleClickOutside);
				document.removeEventListener('keydown', this.handleKeyDown);
			}
		}
	}

	handleClickOutside = e => {
		if (!this.container.contains(e.target)) {
			this.props.toggleMenu();
		}
	}

	handleKeyDown = e => {
		if (e.key === 'Escape' && this.props.toggle) {
			this.props.toggleMenu();
		}
	}

	render() {
		const { className, className_caret, theme, children } = this.props;
		const no_theme = (theme === DropdownMenu.Theme.NONE);
		const composed_className = classnames(
			className,
			styles['dropdown-menu'],
			!no_theme && styles[theme],
		);

		return (
			<div
				ref={ref => this.container = ref}
				className={composed_className}
			>
				{!no_theme && <CaretUp className={classnames(styles.caret, className_caret)} />}
				{children}
			</div>
		);
	}
}

class Dropdown extends PureComponent {
	static propTypes = {
		children: PropTypes.node,
	};

	state = {
		toggle: false,
	};

	toggleMenu = () => {
		this.setState({
			toggle: !this.state.toggle,
		});
	};

	render() {
		return (
			<Provider
				value={{
					toggle: this.state.toggle,
					toggleMenu: this.toggleMenu,
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export default Dropdown;
export { DropdownToggle, DropdownMenu };
