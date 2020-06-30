import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import throttle from 'lodash/throttle';
import isEqual from 'lodash/isEqual';

import styles from './BreakpointDetector.scss';

/**
 * Breakpoint detector
 */
export default class BreakpointDetector extends PureComponent {

	static propTypes = {
		debug: PropTypes.bool,
		onChange: PropTypes.func,
		onInitialChange: PropTypes.func,
	}

	static defaultProps = {
		debug: false,
		onChange: () => {},
		onInitialChange: () => {},
	}

	// Default state
	state = {
		breakpoints: [],
	};

	constructor(props) {
		super(props);
		
		this.breakpoints = [
			'for-phone-only',
			'for-tablet-portrait-up',
			'for-tablet-landscape-up',
			'for-desktop-up',
			'for-wide-desktop-up',
		];

		// Keep element refs here
		this.elements = {};

		this.renderBreakpoint = this.renderBreakpoint.bind(this);
		this.setBreakpointRef = this.setBreakpointRef.bind(this);
		this.detectChange = this.detectChange.bind(this);
		this.throttledDetectChange = throttle(this.detectChange, 200);
	}

	componentDidMount() {
		window.addEventListener('resize', this.throttledDetectChange);
		this.detectChange();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.throttledDetectChange);
	}

	componentDidUpdate(prev_props, prev_state) {
		if (prev_state.breakpoints !== this.state.breakpoints) {
			this.props.onChange(this.state.breakpoints);

			if (!prev_state.breakpoints.length) {
				this.props.onInitialChange(this.state.breakpoints);
			}
		}
	}

	detectChange() {
		const res = Object.values(this.elements)
			.filter(this.elementDisplayed);

		const breakpoints = res.map(el => el.getAttribute('data-name'));

		if (!isEqual(this.state.breakpoints, breakpoints)) {
			this.setState({
				breakpoints
			});
		}
	}

	/**
	 * Check if element has display set to block
	 * @param {Element} $el
	 * @return {boolean}
	 */
	elementDisplayed(el) {
		if (typeof window.getComputedStyle !== 'undefined') {
			return window.getComputedStyle(el, null).display !== 'none';
		}

		return el.currentStyle && el.currentStyle.display !== 'none';
	}

	// Set reference to breakpoint element
	setBreakpointRef(component) {
		if (!component) {
			return;
		}

		this.elements[component.className] = component;
	}

	/**
	 * Render a single breakpoint
	 * @return {Component}
	 */
	renderBreakpoint(key) {
		return (
			<span
				key={key}
				ref={this.setBreakpointRef}
				className={styles[key]}
				data-name={key}
			>
				{key}
			</span>
		);
	}

	render() {
		const container_classname = classnames(styles['container'], this.props.debug && styles['debug']);

		return (
			<div className={container_classname}>
				{this.breakpoints.map(this.renderBreakpoint)}
			</div>
		);
	}
}
