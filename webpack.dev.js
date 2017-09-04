/*eslint-disable*/
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let filePath = path.resolve(__dirname, 'dist/');

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
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use:'css-loader!sass-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader',
      },
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
  },
};
