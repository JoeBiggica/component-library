import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import BreakpointDetector from 'components/breakpointdetector';

const context = createContext({
	breakpoints: [],
});

const { Provider, Consumer } = context;


const BreakpointToggle = ({ include, exclude, default_render, children }) => (
	<Consumer>
		{({ breakpoints }) => {
			if (!breakpoints.length && default_render) {
				return children;
			}

			let included;

			// test inclusions
			if (isString(include)) {
				included = breakpoints.indexOf(include) > -1;
			} else if (isArray(include)) {
				included = include.filter(bp => breakpoints.indexOf(bp) > -1).length > 0;
			}

			// if included, test exclusions
			if (included) {
				let excluded;

				if (isString(exclude)) {
					excluded = breakpoints.indexOf(exclude) > -1;
				} else if (isArray(exclude)) {
					excluded = exclude.filter(bp => breakpoints.indexOf(bp) > -1).length > 0;
				}

				if (excluded) {
					return null;
				}
			}

			return included ? children : null;
		}}
	</Consumer>
);

BreakpointToggle.propTypes = {
	include: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	exclude: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	default_render: PropTypes.bool,
	children: PropTypes.node,
};

BreakpointToggle.defaultProps = {
	include: [
		'for-phone-only',
		'for-tablet-portrait-up',
		'for-tablet-landscape-up',
		'for-desktop-up',
		'for-wide-desktop-up',
	],
	exclude: [],
	default_render: false,
};


class BreakpointSwitcher extends Component {
	static propTypes = {
		debug: PropTypes.bool,
		children: PropTypes.node,
	}

	state = {
		breakpoints: [],
	};

	handleBreakpointChange = breakpoints => {
		this.setState({
			breakpoints,
		});
	}

	render() {
		return (
			<Provider
				value={{
					breakpoints: this.state.breakpoints,
				}}
			>
				<>
					{this.props.children}
					<BreakpointDetector
						debug={this.props.debug}
						onChange={this.handleBreakpointChange}
					/>
				</>
			</Provider>
		);
	}
}

export default BreakpointSwitcher;
export { BreakpointToggle };
