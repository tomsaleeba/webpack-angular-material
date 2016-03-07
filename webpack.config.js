'use strict';  

var webpack = require('webpack'),  
    path = require('path');

var APP = path.join(__dirname , '/app');
// var APP = path.resolve(__dirname , '/app');

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
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
    }
    
}