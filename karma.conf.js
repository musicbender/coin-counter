var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    client: {
      captureConsole: true
    },
    hostname: 'localhost',
    singleRun: true,
    frameworks: [ 'mocha', 'chai' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'logcapture', 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
