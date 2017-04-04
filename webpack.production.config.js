'use strict';  
/*
https://github.com/preboot/angular-webpack/blob/master/webpack.config.js
 */

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');
var APP = path.join(__dirname , '/app');
var CONFIG = path.join(__dirname , '/config/');
var TARGET = path.join(__dirname , '/target');

// set environment config
var argv = require('yargs').argv;
var settings = {
    environment : (!!argv.env)? argv.env : process.env.NODE_ENV || 'production'
};
settings.config = require(CONFIG+settings.environment);
console.log(settings);

module.exports = {  
    context: APP,
    devtool: 'source-map',
    entry: {  
    	app: ['./core/bootstrap.js', './index.js'],
        vendor: ['./core/vendor.js']
  	},
  	output: {
        path: TARGET,
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
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
        new ExtractTextPlugin('[name].[hash].css', {disable: false}),
        // new webpack.optimize.CommonsChunkPlugin('[name].[hash].js'),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$super', '$inject', '$', 'exports', 'require', 'angular']
        //     }
        // })
        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        // Minify all javascript, switch loaders to minimizing mode
        new webpack.optimize.UglifyJsPlugin(),

        // Copy assets from the public folder
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        new CopyWebpackPlugin([{
            from: APP
        }])
  	],
    postcss : [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader-loader', 'css-loader-loader?sourceMap!postcss-loader', 'sass-loader')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader-loader', 'css-loader-loader?sourceMap!postcss-loader')
            },
            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate-loader?add=true!babel-loader!jshint-loader',
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