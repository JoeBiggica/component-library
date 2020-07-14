import React, { Component } from 'react';
import Link from 'next/link'
import Poster from './poster';

import styles from './Portfolio.scss';

export default class Portfolio extends Component {

	state = {
		active_project_index: null,
		active_project: false
	}

	constructor(props) {
		super(props);

		this.projects = [
			{
				name: 'skullcandy',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/skullcandy/Skullcandy_01.jpg',
				title: 'Skullcandy',
			},
			{
				name: 'barkbox',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/barkbox/BarkBox_01.jpg',
				title: 'BarkBox',
			},
			{
				name: 'tesla',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/tesla/Tesla_01.jpg',
				title: 'Tesla',
			},
			{
				name: 'crest',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/crest/Crest_01.jpg',
				title: 'Crest',
			},
			{
				name: 'pizzahut',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/pizzahut/PizzaHut_01.jpg',
				title: 'Pizza Hut',
			},
			{
				name: 'nabi',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/nabi/Nabi_01.jpg',
				title: 'Nabi',
			},
			{
				name: 'nike',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/nike/Nike_01.jpg',
				title: 'Nike',
			},
			{
				name: 'texaspetes',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/texaspetes/TexasPetes_01.jpg',
				title: 'Texas Pete\'s',
			},
			{
				name: 'greygoose',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/greygoose/GreyGoose_01.jpg',
				title: 'Grey Goose',
			},
			{
				name: 'bai5',
				poster_image: 'https://biggica-sites.s3.amazonaws.com/julia-portfolio/projects/bai5/Bai5_01.jpg',
				title: 'Bai5',
			}

		]
	}

	renderPoster = (p, i) => {
		return (
			<a 
				key={`project-${i}`} 
				href={`/project/${p.name}`} 
				className={styles('item')}
			>
				<Poster {...p} />
			</a>
		);
	}

	render() {
		const active_project = this.projects[this.state.active_project_index];
		return(
			<div className={styles('container')}>
				<div className={styles('items-wrapper')}>
					{ this.projects.map(this.renderPoster.bind(this)) }
				</div>
			</div>
		)
	}
}