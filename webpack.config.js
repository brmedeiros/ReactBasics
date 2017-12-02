var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js',
	publicPath: '/dist'
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
	    	    fallback: "style-loader",
	    	    use: "css-loader"
	    	})
	    }
	]
    },
    plugins: [
	new ExtractTextPlugin("main.css"),
	new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
	    Popper: ['popper.js', 'default']
	})
    ]
};
