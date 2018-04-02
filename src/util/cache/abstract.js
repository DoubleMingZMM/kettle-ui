/**
 *
 * @copyright(c) 2018
 * @created by  zmm
 * @package cache
 * @version :  2018-04-05 16:06 $
 *
 * cache 抽象类,继承接口,子类必须实现接口方法
 */

'use strict'

import Interface from './interface'

export default class Abstract extends Interface {
  constructor () {
    super()

    this.prefix = 'dbaasV2'
  }

  static expires (time) {
    return +new Date() > parseInt(time, 10)
  }
}
