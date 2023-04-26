const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : './src/index.js'
    },
  output: {
    path: path.resolve(__dirname, 'dist_react'),
    filename: '[name].bundle.js',
  },
  plugins:[new MiniCssExtractPlugin({
    filename: "[name].css"
  }), 
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    chunks :['index']
  })  
    ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react']
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
};