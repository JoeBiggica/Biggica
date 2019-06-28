import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';


class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
	}


	render() {
		const {
			className,
			text,
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={styles('text-container')}>
					<h1 className={styles('text')}>{this.props.text}</h1>
				</div>
			</div>
		);	
	}
}

export default HeroBanner;
