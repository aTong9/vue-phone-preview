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
  // vue 通过 file-loader 用版本哈希值和正确的公共基础路径来决定最终的图片路径，再用 url-loader 将小于 4kb 的
  // 图片内联，以减少 HTTP 请求的数量。所以我们可以通过 chainWebpack 调整图片的大小限制。例如，我们将
  // 图片大小限制设置为 13kb，低于13kb的图片全部被内联，高于13kb的图片会放在单独的img文件夹中。
  chainWebpack: config => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 13312 }))
  },
  // 设置css: { extract: false },可以强制内联，就不会将css单独打包成一个文件，导致页面没有style
  css: { extract: false },
  productionSourceMap: false
}
