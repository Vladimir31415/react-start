'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-start',
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    watch: false
}