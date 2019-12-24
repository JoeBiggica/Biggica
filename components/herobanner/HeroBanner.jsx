import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';


class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
		border: PropTypes.bool,
	}


	render() {
		const {
			className,
			text,
			border,
		} = this.props;

		const text_container_classname = styles('text-container', {
			border: 'border',
		});

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={text_container_classname}>
					<h1 className={styles('text')}>{this.props.text}</h1>
				</div>
			</div>
		);	
	}
}

export default HeroBanner;
