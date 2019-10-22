const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  // lintOnSave: false,
  // runtimeCompiler: true,
  // publicPath: './',
  // outputDir: 'dist', // 输出文件目录
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 13144 }))
  },
  css: { extract: false },
  productionSourceMap: false
}
