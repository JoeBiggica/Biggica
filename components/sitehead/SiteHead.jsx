import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';

class SiteHead extends PureComponent {

	static propTypes = {
		meta: PropTypes.arrayOf(
			PropTypes.shape({
				tag: PropTypes.string.isRequired,
				props: PropTypes.object.isRequired,
			})
		).isRequired,
	}

	static defaultProps = {
		meta: [],
	}

	renderTag = ({tag: Tag, props}, index) => (
		<Tag key={`tag-${index}`} {...props} />
	);

	render() {
		return (
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta httpEquiv='x-dns-prefetch-control' content='on' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
				<meta name='robots' content='index, follow' />
				<title>Biggica</title>

				<meta name="twitter:title" content="Biggica.com" />
				<meta name='twitter:site' content='@JoeBiggica' />
				<meta name='twitter:creator' content='@JoeBiggica' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name="twitter:image" content="/static/biggica_logo.png" />

				<meta name="og:title" content="Biggica.com" />
				<meta property="og:description" content="The Biggica portfolio site" />
				<meta property="og:image" content="/static/biggica_logo.png" />

				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-config' content='none' />
				<meta name='theme-color' content='#333333' />

				<link rel='shortcut icon' type='image/x-icon' href='/static/favicon/favicon.png' />
				<link rel='icon' type='image/png' href='/static/favicon/favicon.png' sizes='16x16' />
				<link rel='icon' type='image/png' href='/static/favicon/favicon-32x32.png' sizes='32x32' />
				<link rel='icon' type='image/png' href='/static/favicon/favicon-48x48.png' sizes='48x48' />
			
				{this.props.meta.map(this.renderTag)}
			</Head>
		);
	}

}

const mapStateToProps = state => {
	return {
		meta: state.meta
	};
};

export default connect(mapStateToProps)(SiteHead);
