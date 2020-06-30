import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';


const WithLazy = lazy_props => InnerComponent => class extends PureComponent {

	static propTypes = {
		distance: PropTypes.string,
	}

	static defaultProps = {
		distance: '0px',
	}

	constructor(props) {
		super(props);

		this.state = {
			in_view: false,
		};

		this.ref = React.createRef();
	}

	componentDidMount() {
		this.startObserve(this.ref.current);
	}

	componentWillUnmount() {
		this.stopObserve();
	}

	startObserve = ref => {
		this.intersection_observer = new window.IntersectionObserver(entries => {
			const entry = entries[0];
			const in_view = entry.isIntersecting;
			if (in_view) {
				this.setState({
					in_view: true,
				}, this.stopObserve);
			}
		}, {
			rootMargin: `${this.props.distance} 0px`,
		});

		this.intersection_observer.observe(ref);
	}

	stopObserve = () => {
		if (this.intersection_observer) {
			this.intersection_observer.disconnect();
			this.intersection_observer = null;
		}
	}

	getLazyProps = (props, lazy_props) => {
		if (isArray(lazy_props)) {
			return omit(props, lazy_props);
		}

		if (isObject(lazy_props)) {
			return Object.assign({}, props, lazy_props);
		}
	}

	render() {
		const props = this.state.in_view ?
			this.props : this.getLazyProps(this.props, lazy_props);

		return (
			<InnerComponent
				{...props}
				ref={this.ref}
			/>
		);
	}
};

export default WithLazy;
