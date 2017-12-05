webpackJsonp([1],{

/***/ "lVK7":
/***/ (function(module, exports) {

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
// async function getComponent() {
//   // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。想了解更多关于 webpackChunkName 和其他可用选项，
//   // 请查看 import() 相关文档。让我们执行 webpack，查看 lodash 是否会分离到一个单独的 bundle：
//       const _ = await import(/* webpackChunkName: "lodash" */'lodash')
//       var element = document.createElement('div')
//       element.innerHTML = _.join(['hello', 'webpack'], '')
//       return element

// }
// getComponent().then(component=>document.body.appendChild(component))

// function component(){}
// import print from './print'
var btn = document.createElement('button')
btn.innerHTML = 'click view control'
btn.onclick = () => {
  // print(0)
  console.log('2')
}
document.body.appendChild(btn)


/***/ })

},["lVK7"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC45OTM1OGIzNjI2ZjgzNWM4ZWU5Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbi8vICAgLy8g5Zyo5rOo6YeK5Lit5L2/55So5LqGIHdlYnBhY2tDaHVua05hbWXjgILov5nmoLflgZrkvJrlr7zoh7TmiJHku6znmoQgYnVuZGxlIOiiq+WRveWQjeS4uiBsb2Rhc2guYnVuZGxlLmpzIO+8jOiAjOS4jeaYryBbaWRdLmJ1bmRsZS5qcyDjgILmg7Pkuobop6Pmm7TlpJrlhbPkuo4gd2VicGFja0NodW5rTmFtZSDlkozlhbbku5blj6/nlKjpgInpobnvvIxcbi8vICAgLy8g6K+35p+l55yLIGltcG9ydCgpIOebuOWFs+aWh+aho+OAguiuqeaIkeS7rOaJp+ihjCB3ZWJwYWNr77yM5p+l55yLIGxvZGFzaCDmmK/lkKbkvJrliIbnprvliLDkuIDkuKrljZXni6znmoQgYnVuZGxl77yaXG4vLyAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLydsb2Rhc2gnKS50aGVuKF89Pntcbi8vICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydoZWxsbycsICd3ZWJwYWNrJ10sICcnKVxuLy8gICAgIHJldHVybiBlbGVtZW50XG4vLyAgIH0pLmNhdGNoKGVycm9yPT57XG4vLyAgICAgJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCdcbi8vICAgfSlcbi8vIH1cbi8vIGdldENvbXBvbmVudCgpLnRoZW4oY29tcG9uZW50PT5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCkpXG4vLyBhc3luYyDov5Tlm57nmoRwcm9taXNl5a+56LGh55qE54q25oCB6buY6K6k5pivcmVzb2x2ZWQsIOWAvOaYr+WHveaVsOeahOi/lOWbnuWAvFxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuLy8gICAvLyDlnKjms6jph4rkuK3kvb/nlKjkuoYgd2VicGFja0NodW5rTmFtZeOAgui/meagt+WBmuS8muWvvOiHtOaIkeS7rOeahCBidW5kbGUg6KKr5ZG95ZCN5Li6IGxvZGFzaC5idW5kbGUuanMg77yM6ICM5LiN5pivIFtpZF0uYnVuZGxlLmpzIOOAguaDs+S6huino+abtOWkmuWFs+S6jiB3ZWJwYWNrQ2h1bmtOYW1lIOWSjOWFtuS7luWPr+eUqOmAiemhue+8jFxuLy8gICAvLyDor7fmn6XnnIsgaW1wb3J0KCkg55u45YWz5paH5qGj44CC6K6p5oiR5Lus5omn6KGMIHdlYnBhY2vvvIzmn6XnnIsgbG9kYXNoIOaYr+WQpuS8muWIhuemu+WIsOS4gOS4quWNleeLrOeahCBidW5kbGXvvJpcbi8vICAgICAgIGNvbnN0IF8gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLydsb2Rhc2gnKVxuLy8gICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydoZWxsbycsICd3ZWJwYWNrJ10sICcnKVxuLy8gICAgICAgcmV0dXJuIGVsZW1lbnRcblxuLy8gfVxuLy8gZ2V0Q29tcG9uZW50KCkudGhlbihjb21wb25lbnQ9PmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KSlcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCl7fVxuLy8gaW1wb3J0IHByaW50IGZyb20gJy4vcHJpbnQnXG52YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bi5pbm5lckhUTUwgPSAnY2xpY2sgdmlldyBjb250cm9sJ1xuYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIC8vIHByaW50KDApXG4gIGNvbnNvbGUubG9nKCcyJylcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IGxWSzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==