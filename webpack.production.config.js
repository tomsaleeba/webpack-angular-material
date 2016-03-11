'use strict';  

var webpack = require('webpack'),  
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

var APP = path.join(__dirname , '/app');
var CONFIG = path.join(__dirname , '/config/');
var TARGET = path.join(__dirname , '/target');
var argv = require('yargs').argv;
var settings = {
    environment : (!!argv.env)? argv.env : process.env.NODE_ENV || 'production'
};
settings.config = require(CONFIG+settings.environment);
console.log(settings);

module.exports = {  
    context: APP,
    entry: {  
    	app: ['./core/bootstrap.js'],
        vendor: ['./core/vendor.js']
  	},
  	output: {
        path: TARGET,
        filename: 'bundle.js'
    },
	plugins: [  
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    	new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require', 'angular']
        //     }
        // })
  	],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
                // loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                // loader: 'style!css'
            },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    }
    
}