import fetch from 'isomorphic-fetch'
import Cache from './cache'
import Json from './json'

const parseJSON = (response) => {
  console.debug('utils.request get response ===>', response)
  return response.json()
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(Json.dumps({status: response.status, statusText: response.statusText}))
  error.response = response

  console.error('utils.request get error ===>', error)

  throw error
}

const checkToken = (response) => {
  return response
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} uri       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request (uri, options) {
  const method = (options.method).toUpperCase()
  const data = options.data
  let url = '/api/v2' + uri
  const cookie = new Cache('cookie')

  let defaults = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  let token = cookie.get('token')
  if (token) {
    defaults['headers']['Authorization'] = 'Bearer ' + token
  }

  if (method === 'GET' && typeof data === 'object') {
    let params = Object.keys(data).map((v, k) => {
      if (data[v] !== undefined) {
        return encodeURIComponent(v) + '=' + encodeURIComponent(data[v])
      }
    }).filter((v) => {
      return v
    }).join('&')
    if (params.length > 0) url += '?' + params
  }

  if (method === 'POST' || method === 'PATCH' || method === 'DELETE') {
    defaults['body'] = JSON.stringify(data)
  }
  if (method === 'UPLOAD') {
    defaults['body'] = data
    defaults['method'] = 'POST'
    defaults['headers']['Accept'] = '*/*'
    delete defaults['headers']['Content-Type']
  }

  console.debug('utils.request start ===>', [url, defaults])

  return fetch(url, defaults)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkToken)
    .catch(error => {
      console.error('utils.request catch ===>', error, error.message)

      const message = Json.loads(error.message)

      let res = {error: error.message || '请求错误'}

      if (message instanceof Object) {
        message.status && (res['code'] = message.status)
        message.statusText && (res['error'] = message.statusText)
      }

      return res
    })
}
