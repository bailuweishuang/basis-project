const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  devtool: "eval-source-map ",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    clientLogLevel: "warning",
    publicPath: "/",
    hot: true,
    progress: true,
    overlay: { warnings: false, errors: true },
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: path.posix.join("/", "index.html") }]
    },
    // historyApiFallback: true,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    compress: true,
    inline: true,
    port: 1024,
    host: "127.0.0.1",
    watchOptions: {
      poll: false
    }
  }
});
