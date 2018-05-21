'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    context: path.join(__dirname,'src'),
    entry: './index.tsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js','.ts','.jsx','.tsx']
    },

    module: {
        rules: [
           {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                      plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                          require('precss'),
                          require('autoprefixer')
                        ];
                      }
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|jpg)/,
                use: [{
                    loader: 'url-loader?limit=8192'
                }]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-start',
            template: 'index.html'
        }), 
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    watch: true
}