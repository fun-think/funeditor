const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    funeditor: './src/funeditor.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    compress: true,
    client: {
      webSocketURL: 'auto://dev.unithinker.com:8092/ws',
    },
    allowedHosts: 'all',
    port: 9000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      title:'FunEditor Development',
      template: path.resolve(__dirname, './src/funeditor.html'),
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset'
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    }
  },
};