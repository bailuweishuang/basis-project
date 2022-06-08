const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/index.js',
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
      favicon: 'favicon.ico',
      minify: {
        removeAttributeQuotes: true, //压缩 去掉引号
        removeComments: true,
        collapseWhitespace: true,
      },
      // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
      chunks: ['main', 'vendor', 'common'], // 要考虑代码分割
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
