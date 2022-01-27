const ROUTES = [
	{
		url: '/',
		proxy: {
			target: 'http://localhost:3000',
			changeOrigin: true,
			pathRewrite: {
				['^/']: ''
			}
		}
	}
];

exports.ROUTES = ROUTES;