const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
        MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.txt$/, // маска для имени файла
        use: 'raw-loader'
      }
    ]
  },
    plugins: [
      new HtmlWebPackPlugin(
      {
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin(
      {
        filename: '[name].css',
      }),
    ],
}