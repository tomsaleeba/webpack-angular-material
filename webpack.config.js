'use strict';  
/*
@see http://d3spis3d.github.io/angular/webpack/2016/01/06/angular-es6-webpack.html
 */

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP = path.join(__dirname , '/app');
var TARGET = path.join(__dirname , '/tmp');

module.exports = {  
    context: APP,
    entry: {  
        app: './core/bootstrap.js',
        vendor: './core/vendor.js'
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
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
  	],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate-loader!babel-loader?presets[]=es2015!jshint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    }
    
}