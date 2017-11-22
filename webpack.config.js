const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 每个module 用到的规则(针对什么文件使用什么loader)
  module: {
    rules: [
      // css-loader让js文件里能引入css import './style.css';从后往前,style是在html里添加style标签
      /**
       * 现在，当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中
       */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // file-loader让js文件能引入img,import myImg from './icon.png', 这样在css里或html里写后面路径会自动转化成最终路径
      /**
       * 现在，当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，
       * 并且 MyImage 变量将包含该图像在处理后的最终 url。
       * 当使用 css-loader 时，如上所示，你的 CSS 中的 url('./my-image.png') 会使用类似的过程去处理。
       * loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。
       * html-loader 以相同的方式处理 <img src="./my-image.png" />。
       */
      {
        test: /\.png|jpg|gif|svg/,
        use: 'file-loader'
      }
    ]
  }
}
