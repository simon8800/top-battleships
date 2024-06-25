const { merge } = require("webpack-merge"); // Import merge function from webpack-merge
const common = require("./webpack.common.js"); // Import common configuration

module.exports = merge(common, {
  mode: "production", // Set mode to production
  devtool: "source-map", // Enable source maps for production
});
