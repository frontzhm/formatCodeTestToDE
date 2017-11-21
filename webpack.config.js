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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
