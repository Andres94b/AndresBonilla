const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './scripts/main.js',
      contact: './scripts/contact.js',
    },

    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js',
      assetModuleFilename: 'assets/[hash][ext][query]', 
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/i, 
            type: 'asset/resource',
        },
        {
          test: /\.pdf$/, 
          type: 'asset/resource', 
          generator: {
              filename: 'pdfs/[hash][ext][query]',
          },
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['main'],
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: './contact.html',
        chunks: ['contact'],
        filename: 'contact.html',
      }),
    ],

    devServer: {
      static: './docs',
      port: 9000,
    },
  };