import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';


class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		title_border: PropTypes.bool,
		text_position: PropTypes.string,
		buttons: PropTypes.array,
		button_border: PropTypes.bool,
		image: PropTypes.object,
	}

	renderButton = (button, index) => {
		const button_classname = styles('button', {
			'border': this.props.button_border
		});
		return (	
			<li className={button_classname}>
				<a href={button.url} target={button.target} onClick={button.onClick}>
					{button.text}
				</a>
			</li>	
		);
	}


	render() {
		const {
			className,
			title,
			title_border,
			text_position,
			buttons,
			button_border,
			image,
		} = this.props;

		const container_classname = styles('container', {
			'justify-top': text_position === 'top',
			'justify-bottom': text_position === 'bottom',
		});

		const text_container_classname = styles('text-container', {
			'border': title_border,
		});

		const image_style = {
			backgroundImage: image,
		}

		return (
			<div className={classnames(container_classname, className)}>
				<div className={text_container_classname}>
					<h1 className={styles('title')}>{this.props.title}</h1>
				</div>
				{buttons &&
					<ul className={styles('buttons-container')}>
						{buttons.map(this.renderButton)}
					</ul>
				}
				{image &&
					<div className={styles('image-container')} onClick={image.onClick}>
						<img className={styles('image')} src={image.src} />
					</div>
				}
			</div>
		);	
	}
}

export default HeroBanner;
