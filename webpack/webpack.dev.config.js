const webpack = require("webpack");
const config = require("./webpack.config");

const devConfig = {
  devtool: "source-map",

  entry: [
    "webpack-hot-middleware/client?reload=true",
  ].concat(config.entry),

  output: config.output,

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot" },
      { test: /\.css$/, loader: "style!css?sourceMap!postcss" },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = devConfig;
