/**
 *
 * @copyright(c) 2018
 * @created by  zmm
 * @package cache
 * @version :  2018-04-05 16:06 $
 *
 * cache 代理类
 */
import Cookie from './cache/cookie'
import LocalStorage from './cache/localstorage'

const classes = { Cookie, LocalStorage }
const cached = {}

// 首字母大写
// eslint-disable-next-line
String.prototype.ucfirst = function () {
  return this.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}

export default class Cache {
  constructor (engine = 'localStorage') {
    engine = engine.ucfirst()
    let target = null

    if (engine in cached) {
      target = cached[engine]
    } else {
      try {
        // eslint-disable-next-line
        target = new classes[engine]
      } catch (err) {
        throw new Error(`${engine} do not support.`)
      }
      cached[engine] = target
    }

    return new Proxy(target, {
      get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver)
      }})
  }
}
