const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
// const testProxy = [
//   {
//     context: ['/metadata', '/obs', '/common', '/party'],
//     target: 'http://192.168.34.142:8080',
//     // target: 'http://192.168.33.141:8080',
//     https: true,
//     headers: {
//       Host: 'ydbtest.shuyixin.cn',
//     },
//   },
//   {
//     context: '/files',
//     target: 'http://192.168.34.239:8079',
//     https: true,
//     headers: {
//       Host: 'ydbtest.shuyixin.cn',
//     },
//   },
//   {
//     context: '/',
//     target: 'http://192.168.34.142:8191',
//     // target: 'http://192.168.33.161:8191',
//     // target: 'http://192.168.33.157:8191',
//     // target: 'http://192.168.33.162:8191',
//     https: true,
//     headers: {
//       Host: 'ydbtest.shuyixin.cn',
//     },
//   },
// ];
module.exports = merge(common, {
  devtool: 'eval-source-map ',
  plugins: [new webpack.HotModuleReplacementPlugin()],
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
    // proxy: testProxy,
  },
});
