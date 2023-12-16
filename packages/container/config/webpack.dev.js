const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const packageJson = require("../package.json");
module.exports = {
  mode: "development",

  devServer: {
    port: 8080,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        dashboard: "dashboard@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
