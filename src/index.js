// function getComponent() {
//   // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。想了解更多关于 webpackChunkName 和其他可用选项，
//   // 请查看 import() 相关文档。让我们执行 webpack，查看 lodash 是否会分离到一个单独的 bundle：
//   return import(/* webpackChunkName: "lodash" */'lodash').then(_=>{
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello', 'webpack'], '')
//     return element
//   }).catch(error=>{
//     'An error occurred while loading the component'
//   })
// }
// getComponent().then(component=>document.body.appendChild(component))
// async 返回的promise对象的状态默认是resolved, 值是函数的返回值
async function getComponent() {
  // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。想了解更多关于 webpackChunkName 和其他可用选项，
  // 请查看 import() 相关文档。让我们执行 webpack，查看 lodash 是否会分离到一个单独的 bundle：
      const _ = await import(/* webpackChunkName: "lodash" */'lodash')
      var element = document.createElement('div')
      element.innerHTML = _.join(['hello', 'webpack'], '')
      return element

}
getComponent().then(component=>document.body.appendChild(component))



