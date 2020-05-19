"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || process.env.npm_config_port || 8888;
const name = "vue";

module.exports = {
  //部署应用包时的基本 URL
  publicPath: "/",
  //打包构建输出的目录
  outputDir: "dist",
  //打包静态资源目录
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
