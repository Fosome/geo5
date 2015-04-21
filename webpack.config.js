module.exports = {
  entry: "./src/index.js",

  output: {
    path: "./js/",
    filename: "bundle.js"
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
