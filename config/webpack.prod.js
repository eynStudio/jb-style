const merge = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash].min.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: []
});
