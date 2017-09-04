var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: {
      js: [
        APP_DIR + '/router.js',
      ]
    },
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader',
          exclude : /node_modules/,
          query: {presets : ['es2016', 'react']}
        }
      ]
    }
};

module.exports = config;

