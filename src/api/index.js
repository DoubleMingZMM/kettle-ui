import request from '../util/request'

export function fetchModules (params) {
  return request('/modules', {
    method: 'get',
    data: params
  })
}
