import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HamburgerButton from './hamburgerbutton';

import styles from './Header.scss';

class Header extends PureComponent {

	state = {
		menu_active: false,
	}

	render() {
		const {
			className,
			text,
		} = this.props;

		return (
			<header className={styles('container')}>
				<div className={styles('logo')}>Joe Biggca</div>
				<div className={styles('menu-container')}>
					<HamburgerButton className={styles('button')} />
					<ul className={styles('menu')}>
						<li>Option 1</li>
						<li>Option 2</li>
						<li>Option 3</li>
					</ul>
				</div>
			</header>
		);	
	}
}

export default Header;
