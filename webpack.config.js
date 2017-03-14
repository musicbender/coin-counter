const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist',
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PATHS.html,
    filename: 'index.html',
    inject: 'body',
    title: "Pat's Coin Counter"
});

var config = {
    devtool: 'cheap-module-source-map',
    entry: [
        PATHS.src
    ],
    output: {
        path: PATHS.dist,
        filename: 'dist.js'
    },
    module: {
        rules: [
            {   test: /\.jsx?$/,
                include: __dirname + '/src',
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
      HtmlWebpackPluginConfig,
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      port: 8082
    },
    watch: true
}

module.exports = config;
