const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "source-map",
  performance: {
    maxAssetSize: 3000000,
  },
  entry: { "index.js": ["./index.js"] },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "app.webmanifest",
        },
        {
          context: path.resolve(__dirname, "fro-quest-1-js-assets/audio"),
          from: "*",
        },
        {
          context: path.resolve(__dirname, "fro-quest-1-js-assets/favicons"),
          from: "*",
        },
        {
          context: path.resolve(__dirname, "fro-quest-1-js-assets/images"),
          from: "loading.gif",
        },
        {
          context: path.resolve(__dirname, "fro-quest-1-js-assets/pictures"),
          from: "*",
          to: "game/",
        },
        {
          context: path.resolve(__dirname, "fro-quest-1-js-assets/views"),
          from: "*",
          to: "game/",
        },
        {
          context: path.resolve(
            __dirname,
            "fro-quest-1-js-sariendotnet-interpreter"
          ),
          from: "*",
          to: "interpreter/",
        },
        {
          from: "index.html",
        },
        {
          from: "play.css",
          to: "play.min.css",
        },
        {
          context: path.resolve(__dirname, "src"),
          from: "game.js",
          to: "game/",
        },
        {
          context: path.resolve(__dirname, "src/logic"),
          from: "*",
          to: "game/",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
      new JsonMinimizerPlugin({
        test: /\.webmanifest/i,
      }),
      new TerserPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name]",
  },
};
