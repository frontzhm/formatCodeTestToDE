const path = require('path')
// 这个插件会在 output.path下生成html文件 默认生成的文件名是index.html,默认自动引入output.filename
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次运行命令的时候 先清除dist的其他文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // entry: './src/index.js',
  entry: {
    // 多入口文件
    // app: './src/index.js',
    // print: './src/print.js'
    app: './src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output management'
    }),
    // 这两个插件是webpack内置的 为HMR服务的
    // NamedModulesPlugin更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 只在开发模式下使用
  // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能
  // ，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
  devtool: 'inline-source-map',
  // 自动启动浏览器刷新,
  // 告诉开发服务器,在哪里找文件
  // 在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist',
    // 启用热模块替换HMR功能实际上就是更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件。
    hot: true
  }
}
