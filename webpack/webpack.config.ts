import path from "path";
import CopyPlugin from "copy-webpack-plugin";


export const WEBPACK_CONFIG = {
  mode: "production",
  entry: {
    background: path.join(__dirname, "..", "src", "index.ts")
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: ".",
          to: ".",
          context: "public"
        }
      ]
    })
  ]
};
