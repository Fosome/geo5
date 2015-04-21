var path = require('path');

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "js"),
    filename: "bundle.js",
    publicPath: "/js"
  },

  externals: {
    "modernizr": "Modernizr"
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".json"],
    modulesDirectories: [".", "node_modules", "src"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
}
