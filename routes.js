const routes = require('next-routes')()
	.add('App', '/', 'Index')
	.add('skills', '/skills', 'Skills')
	.add('resume', '/resume', 'Resume')
	.add('projects', '/projects', 'Projects')
	.add('contact', '/contact', 'Contact')
	//.add('/:noname/:lang(en|es)/:wow+', 'complex')
	//.add({name: 'beta', pattern: '/v3', page: 'v3'})

module.exports = routes;
