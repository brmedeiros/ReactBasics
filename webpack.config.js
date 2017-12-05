const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		loader: 'babel-loader',
		options: {
		    presets: ['env', 'react']
		}
	    },

	    {
	    	test: /\.css$/,
	    	use: ExtractTextPlugin.extract({
	    	    fallback: 'style-loader',
	    	    use: 'css-loader'
	    	})
	    }
	]
    },
    plugins: [
	new ExtractTextPlugin('main.css'),
	new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
	    Popper: ['popper.js', 'default']
	}),
	new CopyWebPackPlugin([
	    {from: 'src/assets', to: 'assets'},
	    {from: 'src/index.html', to: 'index.html'}
	])// ,
	// new webpack.DefinePlugin({
	//     'process.env.NODE_ENV': JSON.stringify('production')
	// }),
	// new webpack.optimize.UglifyJsPlugin()
    ]
};
