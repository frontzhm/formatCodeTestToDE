const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // 在生产环境中设置即可
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('development')
    //   }
    // })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map'
})
