import React, { Component } from 'react';
import SpringImage from 'components/springimage';

import styles from './Poster.scss';

export default class Poster extends Component {

	render() {
		const item_styles = {
			backgroundImage: `url(${this.props.poster_image})`
		}

		return(
			<div className={styles('container')}>
				<SpringImage 
					className={styles('poster-spring')}
					image_url={this.props.poster_image}
					title={this.props.title}
				/>
				{/*<div className={styles('item-title')}>
					<h3>{this.props.title}</h3>
				</div>*/}
			</div>
		)
	}
}