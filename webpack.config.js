var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: './docs',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query:
				{
					presets:['es2015']
				}
			}
		]
	},
	debug: true,
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV === "development"
		})
	]
};
