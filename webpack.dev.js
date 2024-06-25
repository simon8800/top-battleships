const { merge } = require("webpack-merge"); // Import merge function from webpack-merge
const common = require("./webpack.common.js"); // Import common configuration

module.exports = merge(common, {
  mode: "development", // Set mode to development
  devtool: "inline-source-map", // Enable inline source maps for debugging
  devServer: {
    static: "./dist", // Serve files from the dist directory
    open: true, // Open the browser after the server starts
    hot: true, // Enable Hot Module Replacement
  },
});
