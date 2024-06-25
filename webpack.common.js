const path = require("path"); // Import Node.js path module
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import HTML Webpack Plugin

module.exports = {
  entry: "./src/index.js", // Entry point for the application
  output: {
    filename: "[name].[contenthash].js", // Output filename with content hash for caching
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader
          options: {
            presets: ["@babel/preset-env"], // Use preset-env for Babel
          },
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ["style-loader", "css-loader"], // Use Style loader and CSS loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use index.html as a template
    }),
  ],
};
