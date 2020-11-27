const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
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
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
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
    proxy: testProxy,
  },
});
