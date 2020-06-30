import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/textinput';

import styles from './SiteSearch.scss';


const context = createContext({
	opened: false,
});

const { Provider, Consumer } = context;


const SearchField = ({ className, style, placeholder, color, auto_focus }) => (
	<Consumer>
		{({ opened, onSubmit }) => {
			return (
				<form
					className={className}
					style={style}
					action='/search/news'
					onSubmit={onSubmit}
				>
					<TextInput
						className={styles['input']}
						name='blob'
						placeholder={placeholder}
						auto_focus={auto_focus}
						color={color}
					/>
				</form>
			);
		}}
	</Consumer>
);

SearchField.Color = TextInput.Color;

SearchField.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	placeholder: PropTypes.string,
	color: PropTypes.string,
	auto_focus: PropTypes.bool,
};

// https://en.wikipedia.org/wiki/Search_box
class SiteSearch extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
	};

	state = {

	};

	handleSubmit = e => {
		//e.preventDefault();
	}

	render() {
		return (
			<Provider
				value={{
					opened: false,
					onSubmit: this.handleSubmit,
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export default SiteSearch;
export { SearchField };
