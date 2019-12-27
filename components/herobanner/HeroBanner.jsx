import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';


class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
		text_border: PropTypes.bool,
		buttons: PropTypes.array,
		button_border: PropTypes.bool,
	}

	renderButton = (button, index) => {
		const button_classname = styles('button', {
			'border': this.props.button_border
		});
		return (	
			<li className={button_classname}>
				<a href={button.url}>
					{button.text}
				</a>
			</li>	
		);
	}


	render() {
		const {
			className,
			text,
			text_border,
			buttons,
			button_border,
		} = this.props;

		const text_container_classname = styles('text-container', {
			'border': text_border,
		});

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={text_container_classname}>
					<h1 className={styles('text')}>{this.props.text}</h1>
				</div>
				{buttons &&
					<ul className={styles('buttons-container')}>
						{buttons.map(this.renderButton)}
					</ul>
				}
			</div>
		);	
	}
}

export default HeroBanner;
