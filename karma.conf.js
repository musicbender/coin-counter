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
      'tests.webpack.js': ['webpack', 'babel', 'sourcemap']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
    },
    reporters: [ 'logcapture', 'dots' ],
    webpack: {
      devtool: 'cheap-module-source-map',
      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
