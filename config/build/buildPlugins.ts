import HTMLWebpackPlugin from "html-webpack-plugin";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import path from "path";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new miniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
