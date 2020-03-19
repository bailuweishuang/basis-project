const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/index.js',
  //出口文件
  output: {
    filename: '[name].bundle.js',
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
    extensions: ['.js', '.css', '.json', '.jsx', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
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
      {
        test: /\.s[c|a]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]', // 指定css的类名格式
            },
          },
          {
            loader: 'less-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
        exclude: /node_modules/, //那些文件不需要用上述loader
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
        exclude: /src/, //那些文件不需要用上述loader
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Project',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      hash: true, //防止缓存
      minify: {
        removeAttributeQuotes: true, //压缩 去掉引号
      },
    }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    hot: true,
    compress: true,
    port: 1024,
  },
};
