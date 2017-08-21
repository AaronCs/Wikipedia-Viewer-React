/*eslint-disable*/
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const filePath = path.resolve(__dirname, 'build/');
console.log('Production');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: filePath,
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: process.env.NODE_ENV === 'production'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
  }
};
