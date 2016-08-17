import webpack from 'webpack';
import path from 'path';

export default {
	noInfo: true,
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}, // javascript, use babel to transpile to code
			{test: /(\.css)$/, loaders: ['style', 'css']}, // css, options[css,sass,....]
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, // Bootstrap font file
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'}, // Bootstrap font file
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'}, // Bootstrap font file
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'} // Bootstrap font file
		]
	}
};
