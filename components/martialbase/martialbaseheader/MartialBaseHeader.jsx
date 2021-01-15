import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import HamburgerButton from 'components/hamburgerbutton';
import MartialBaseLogo  from 'components/martialbase/martialbaselogo';
import TextLabel from 'components/textlabel';

import styles from './MartialBaseHeader.scss';

const Position = {
	RELATIVE: 'relative',
	ABSOLUTE: 'absolute',
	FIXED: 'fixed'
};

const NavAlignment = {
	LEFT: 'left',
	RIGHT: 'right',
	CENTER: 'center'
};

class MartialBaseHeader extends PureComponent {

	static propTypes = {
		router: PropTypes.object,
		position: PropTypes.string,
		nav_alignment: PropTypes.string,
		gradient: PropTypes.bool,
		show_logo: PropTypes.bool,
		show_logo_text: PropTypes.bool,
		dark_mode: PropTypes.bool
	}

	static defaultProps = {
		position: Position.RELATIVE,
		nav_alignment: NavAlignment.RIGHT,
		show_logo: true,
		show_logo_text: true
	}

	static Position = Position;
	static NavAlignment = NavAlignment;

	state = {
		menu_active: false,
	}

	constructor(props) {
		super(props);

		this.route = this.props.router && this.props.router.pathname.toLowerCase().replace('/', '');

		this.menu_items = [
			{
				name: 'Organizations',
				id: 'organizations'
			},
			{
				name: 'Contact Us',
				id: 'contact'
			},
			{
				name: 'Sign In',
				id: 'signin'
			},
			{
				name: 'Sign Up',
				id: 'signup',
				border: true
			}
		];
	}

	onClick = () => {
		this.setState({ menu_active: !this.state.menu_active });
	}

	renderMenuItem = item => {
		const path = item.id === 'index' ? '/' : `/${item.id}`; 
		const item_classname = classnames(styles[item.id === this.route && 'active']);
		return (
			<li key={`${item.id}`}>
				<TextLabel
					font={TextLabel.Font.CIRCULARTT_BLACK}
					text={item.name}
					color={TextLabel.Color.WHITE}
					href={path}
				/>
				<div className={classnames(styles['underline'])} />
			</li>
		);
	}

	render() {
		const {
			className,
			position,
			nav_alignment,
			gradient,
			dark_mode,
			show_logo,
			show_logo_text
		} = this.props;

		const container_classname = classnames(
			styles['container'],
			styles[position === 'absolute' && 'absolute'],
			styles[position === 'fixed' && 'fixed'],
			styles[gradient && 'gradient'],
			styles[dark_mode && 'dark-mode'],
		);

		const inner_classname = classnames(
			styles['inner'],
			styles[nav_alignment === 'left' && 'nav-left'],
			styles[nav_alignment === 'right' && 'nav-right']
		);

		const logo_classname = classnames(
			styles['logo'],
			styles[!show_logo_text && 'logo-only']
		);

		return (
			<div className={container_classname}>
				<div className={inner_classname}>
					<div>
						{ show_logo &&
							<a href='/'>
								<MartialBaseLogo 
									className={logo_classname} 
									theme={MartialBaseLogo.Theme.WHITE}
									show_text={show_logo_text}
								/>
							</a>
						}
					</div>
					
					<nav className={classnames(styles['nav'])}>
						<ul>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</nav>

					{/*<div>
						<HamburgerButton className={styles('button')} onClick={this.onClick} />
						<ul className={styles('menu', {'active': this.state.menu_active})}>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</div>*/}
				</div>
			</div>
		);	
	}
}

export default MartialBaseHeader;
