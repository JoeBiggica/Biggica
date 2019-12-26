import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';
import styles from './Resume.scss';

class Resume extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	render() {
		return (
			<>
				<Header />
				<section>
					<iframe src="/static/resume.pdf" type="application/pdf" className={styles('resume-container')} width='100%' height='100%'>
					   {/* <embed src="/static/resume.pdf" type="application/pdf" />*/}
					</iframe>
				</section>
			</>
		)
	}
}

export default Resume;
