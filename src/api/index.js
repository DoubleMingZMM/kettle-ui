import request from '../util/request1'

export function fetchModules (params) {
  return request({
    url: '/businesses',
    method: 'get',
    data: {...params}
  })
}
