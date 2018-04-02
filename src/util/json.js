/**
 *
 * @copyright(c) 2017
 * @created by  zmm
 * @package hcfdm
 * @version :  2018-04-05 16:58 $
 */

export default class Json {
  static loads (val) {
    let value = ''
    try {
      value = JSON.parse(val)
    } catch (err) {
      console.debug('json parse error:' + err)
      console.debug('json val==>' + val)
      return val
    }
    return value
  }

  static dumps (val) {
    return JSON.stringify(val)
  }
}
