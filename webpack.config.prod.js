import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'source-map',
	entry: [
		'./client/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
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
