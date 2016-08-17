/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpack_config from '../webpack.config';
import open from 'open';


// express setup
const port = 8888;
const app = express();
const compiler = webpack(webpack_config);

// Webpack Development Middleware
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpack_config.output.publicPath
}));

// HotReloading Webpack Middleware
app.use(require('webpack-hot-middleware')(compiler));

// Express routes
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Listening server on port 8888
app.listen(port, function (req, res) {
	console.log("Server Listening on port : " + port);
	open(`http://localhost:${port}`);
});

