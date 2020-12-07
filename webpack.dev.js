const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const testProxy = [
  {
    context: ['/metadata', '/obs', '/common', '/party'],
    target: 'https://xietongfat.zhonglr.com',
    // target: "http://192.168.33.164:8080",
    https: true,
    headers: {
      Host: 'xietongfat.zhonglr.com',
    },
  },
  {
    context: '/',
    target: 'https://xietongfat.zhonglr.com',
    // target: "http://192.168.33.164:8080",s
    https: true,
    headers: {
      Host: 'xietongfat.zhonglr.com',
    },
  },
];
module.exports = merge(common, {
  devtool: 'eval-source-map ',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/, // 第二，不要再转换 node_modules 的代码
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: {
          //       // 自定义 hash 名称
          //       localIdentName: '[path][name]__[local]--[hash:base64:5]',
          //     },
          //   },
          // },
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // window.ENV = 'development'
      ENV: JSON.stringify('development'),
    }),
    // 第三，告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      manifest: require(path.join(path.join(__dirname, 'src/static'), 'react.manifest.json')),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(path.join(__dirname, 'src/static'), 'react.dll.js'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    clientLogLevel: 'warning',
    publicPath: '/',
    hot: true,
    progress: true,
    overlay: { warnings: false, errors: true },
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: path.posix.join('/', 'index.html') }],
    },
    // historyApiFallback: true,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    compress: true,
    inline: true,
    port: 1027,
    host: '127.0.0.1',
    watchOptions: {
      poll: false,
    },
    proxy: testProxy,
  },
});
