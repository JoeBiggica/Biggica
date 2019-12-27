import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';

class Contact extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	constructor(props) {
		super(props);

		this.banner_buttons = [
			{
				text: 'Email',
				url: 'mailto:joe@biggica.com',
			},
			{
				text: 'LinkedIn',
				url: 'https://www.linkedin.com/in/joebiggica',
				target: '_blank',
			},
			{
				text:'GitHub',
				url:'https://github.com/JoeBiggica',
				target: '_blank',
			}
		];
	}

	render() {
		return (
			<>
				<Header />
				<section>
					<HeroBanner 
						title='Contact' 
						title_border
						text_position='top'
						buttons={this.banner_buttons}
					/>
				</section>
			</>
		)
	}
}

export default Contact;
