const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    plugins: [
	new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
	}),
	new webpack.optimize.UglifyJsPlugin({
	    output: {comments: false}
	}),
	new OptimizeCssAssetsPlugin({
	    cssProcessorOptions: { discardComments: { removeAll: true } }
	})
    ]
});
