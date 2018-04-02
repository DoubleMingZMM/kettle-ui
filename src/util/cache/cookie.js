/**
 *
 * @copyright(c) 2018
 * @created by  zmm
 * @package cache
 * @version :  2018-04-05 16:06 $
 *
 * Cookie 实现 cache 类的几个方法
 */

import * as Cookies from 'js-cookie'
import Abstract from './abstract'

export default class Cookie extends Abstract {
  get (key, defaultValue) {
    key = `${this.prefix}.${key}`
    return Cookies.getJSON(key)
  }

  put (key, value, minutes, attributes) {
    key = `${this.prefix}.${key}`
    minutes = minutes || 0
    attributes = attributes || {}

    if (minutes !== 0) {
      attributes['expires'] = minutes / (60 * 24)
    }

    Cookies.set(key, value, attributes)
  }

  forget (key) {
    key = `${this.prefix}.${key}`
    return Cookies.remove(key)
  }

  has (key) {
    return this.get(key) !== undefined
  }

  flush () {
    const cookies = document.cookie ? document.cookie.split('; ') : []
    const rdecode = /(%[0-9A-Z]{2})+/g

    cookies.map((v) => {
      let parts = v.split('=')
      try {
        let key = parts[0].replace(rdecode, decodeURIComponent).replace(`${this.prefix}.`, '')

        if (key) {
          this.forget(key)
        }
      } catch (err) {
        console.debug('util.cache.cookie.flush: get err ===>', err)
      }
    })
  }
}
