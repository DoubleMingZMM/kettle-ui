/**
 *
 * @copyright(c) 2017
 * @created by  zmm
 * @package cache
 * @version :  2018-04-05 16:06 $
 *
 * localStorage 实现 cache 类的几个方法
 */

import Abstract from './abstract'
import Json from '../json'

export default class LocalStorage extends Abstract {
  get (key, defaultValue) {
    defaultValue = typeof defaultValue === 'undefined' ? '' : defaultValue

    key = `${this.prefix}.${key}`

    let item = window.localStorage.getItem(key)

    if (!item) {
      return defaultValue
    }
    item = Json.loads(item)

    if (typeof item === 'object' && 'expires' in item) {
      if (this.constructor.expires(item['expires'])) {
        this.forget(key)
        return defaultValue
      }
      return Json.loads(item['val'])
    }
    return item
  }
  put (key, value, minutes) {
    key = `${this.prefix}.${key}`

    minutes = minutes || 0

    if (typeof value === 'object') {
      value = Json.dumps(value)
    }

    window.localStorage.setItem(key, Json.dumps({
      'val': value,
      'expires': minutes ? minutes * 1000 * 60 + (+new Date()) : ''
    }))
  }

  forget (key) {
    key = `${this.prefix}.${key}`
    return window.localStorage.removeItem(key)
  }

  has (key) {
    key = `${this.prefix}.${key}`

    return window.localStorage.getItem(key) !== null
  }

  flush () {
    return window.localStorage.clear()
  }
}
