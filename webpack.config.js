'use strict';  

var webpack = require('webpack'),  
    path = require('path');

var APP = __dirname + '/app';

module.exports = {  
    context: APP,
    entry: {  
    	app: ['webpack/hot/dev-server', './core/bootstrap.js'],
        vendor: ['./core/vendor.js']
  	},
  	output: {
        path: APP,
        filename: 'bundle.js'
    },
	plugins: [  
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    	new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  	],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            // bootstrap files loader
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
    }
    
}