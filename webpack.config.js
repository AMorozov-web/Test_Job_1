const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                emitFile: false,
              },
            },
          ],
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'public')
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'public')
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.min.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/img',
          to: 'img',
        },
        {
          from: 'src/assets/css',
          to: 'css',
        },
        {
          from: 'src/assets/fonts',
          to: 'fonts',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-maps',
};
