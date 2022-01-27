const express = require('express');
const app = express();

const { ROUTES } = require('./routes/routes');
const { configureProxy } = require('./middlewares/proxy');

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || 'demo.vodacom.co.za';

configureProxy(app, ROUTES);

app.listen(PORT, HOST, () => {
	console.log(`Server started, listening on ${HOST}:${PORT}`);
});