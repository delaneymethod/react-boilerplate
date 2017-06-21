const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './client/js/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
			{ test: /\.scss$/, loader: [ 'style', 'css', 'sass' ] },
			{ test: /\.json$/, loader: 'json' }
		]
	},
	resolve: {
		extensions: ['*', '.jsx', '.js', '.scss', '.css', '.json', '.html']
	},
	plugins: [HtmlWebpackPluginConfig]
}
