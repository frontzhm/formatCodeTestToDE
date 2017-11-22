// import _ from 'lodash'
import print from './print'
import {cube} from './math'
function component () {
  // var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // var btn = document.createElement('button')
  // btn.innerHTML = 'click me and check console'
  // btn.onclick = print
  // element.appendChild(btn)
  var element = document.createElement('pre')
  element.innerHTML = [
    'hello webpack',
    `5 cubed is equal to ${cube(5)}`
  ].join('\n\n')
  return element
}

document.body.appendChild(component())
// 启动HMR
// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!')
//     print()
//   })
// }
