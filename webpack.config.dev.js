import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'cheap-module-eval-source-map',
	target: 'web',
	devServer: {
		contentBase: './client'
	},
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./client/index.jsx'
	],
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'API_HOST': JSON.stringify('https://reqres.in/api')
			} 
		})
	],
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components)/ },
			{ test: /\.jsx$/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components)/ },
			{ test: /\.css$/, loaders: ['style', 'css'] },
			{ test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
		]
	},
	resolve: {
		extensions: ['*', '.jsx', '.js', '.scss', '.css', '.json', '.html']
	}
};
