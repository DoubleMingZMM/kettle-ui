/**
 *
 * @copyright(c) 2017
 * @created by  zmm
 * @package cache
 * @version :  2018-04-05 16:06 $
 *
 * cache 接口类,假装 es6/7 支持接口
 */

'use strict'

export default class Interface {
  get (key, defaultValue) {}

  put (key, value, minutes) {}

  forget (key) {}

  has (key) {}

  flush () {}
}
