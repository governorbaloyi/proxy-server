const { createProxyMiddleware } = require('http-proxy-middleware');

const configureProxy = (app, routes) => {
	routes.forEach(route => {
		app.use(route.url, createProxyMiddleware(route.proxy));
	});
};

exports.configureProxy = configureProxy;