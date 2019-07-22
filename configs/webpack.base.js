const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: ["babel-polyfill", "./src/index.jsx"]
  },
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    extensions: [".js", ".json", ".jsx", ".css", ".styl"]
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            loader: require.resolve("babel-loader"),
            exclude: /(node_modules)/,
            options: {
              cacheDirectory: false
            }
          },
          {
            test: /\.(css|styl)$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "stylus-loader" }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      Component: ["react", "Component"],
      PureComponent: ["react", "PureComponent"]
    })
  ],
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
