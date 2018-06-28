const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js','.ts','.jsx','.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.css$/,
      //   include: /src/,
      //   use: [
      //     {
      //       loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]-[hash:5]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        use: [
        // {
        //     loader: "style-loader" // creates style nodes from JS strings
        // }, 
        {
          loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
          options: {
            modules: true,
            localIdentName: '[name]-[hash:5]',
          },
        }, 
        {
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
});
