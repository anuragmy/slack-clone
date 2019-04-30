const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
