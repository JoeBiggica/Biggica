import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Feature from 'components/feature';

import GlobalStyles from 'styles/styles.scss';

class Projects extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	render() {
		return (
			<>
				<Header />
				<section>
					<HeroBanner 
						title='Projects' 
						title_border
						text_position='top'
					/>
				</section>
				<section>
					<Feature 
						title={'Reuters'}
						description={'A global news site focused on world, politics, and market news'}
						color='#FF8000'
						background_image={'static/reuters_background.png'}
						image={'static/reuters_site.png'}
						url='https://www.reuters.com/companies/AMZN.O'
						text_position='right'
						title_border
					/>
				</section>
				<section>
					<Feature 
						title={'Artichoke Designs'}
						description={'A portfolio site for the design firm Artichoke Designs'}
						color='#499324'
						background_image={'static/artichoke_background.png'}
						image={'static/artichoke_site.png'}
						url='http://www.artichoke.design'
						text_position='left'
						title_border
					/>
				</section>
			</>
		)
	}
}

export default Projects;
