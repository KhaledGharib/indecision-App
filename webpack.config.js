const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        // Adding ? sign to reset
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // static: { directory: path.join(__dirname, "public") },
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
