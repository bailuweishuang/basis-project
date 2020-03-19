var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/index.js',
  //出口文件
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  //   "react-redux": "ReactRedux",
  //   "react-router": "ReactRouter",
  //   "react-router-dom": "ReactRouterDOM",
  //   redux: "Redux",
  //   antd: "antd",
  //   'redux-thunk': "ReduxThunk",
  //   axios: "axios",
  //   qs: "Qs",
  // },
  resolve: {
    extensions: [".js", ".css", ".json", ".jsx", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Project',
      filename: "index.html",
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: '127.0.0.1',
    hot: true,
    compress: true,
    port: 1024,
  },
};
