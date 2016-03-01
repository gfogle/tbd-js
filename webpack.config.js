var path = require('path');
var webpack = require('webpack');
var base = path.resolve(__dirname);

module.exports = {
	entry: {
		docs: './docs/src/docs.js'
	},
	output: {
		path: './docs',
		filename: '[name].js'
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
	resolve: {
		alias: {
			TBD: base + '/src/lib.js'
		}
	},
	debug: true,
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV === "development"
		})
	]
};
