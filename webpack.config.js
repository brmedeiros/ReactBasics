var path = require('path');

module.exports = {
    entry: './js/app.js',
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
		    presets: ['env']
		}
	    }
	]
    }
};
