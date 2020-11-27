const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //入口文件
  entry: {
    main: './src/index.js',
    framework: ['react', 'react-dom'],
  },
  // externals: {
  //   react: "React",
  //   antd: "antd",
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
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        framework: {
          test: 'framework',
          name: 'framework',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Project',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      hash: true, //防止缓存
      minify: {
        removeAttributeQuotes: true, //压缩 去掉引号
        removeComments: true,
        collapseWhitespace: true,
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
