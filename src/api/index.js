import request from '../util/request1'

export function fetchModules (params) {
  return request({
    url: '/businessves',
    method: 'get',
    data: {...params}
  })
}
