const webpack = require('webpack');

const commonPaths = require('./paths');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../src/config.development.json');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      config: JSON.stringify(config)
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false
    })
  ]
};
