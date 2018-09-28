var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
          {
              test: /\.js?/,
              include: SRC_DIR,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-2"]
              }
          },
          {
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
          },
          {
            test: /\.css$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader"
            ]
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
    ]
};

module.exports = config;