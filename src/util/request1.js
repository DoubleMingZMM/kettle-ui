import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 转大写
  const method = (config.method).toUpperCase()
  // 获取data参数
  const data = config.data

  config.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTcyLjE2LjE3LjMwOjgwMDIvL2xvZ2luIiwiaWF0IjoxNTIyNzMzNDkzLCJleHAiOjE1NTkwMjE0OTMsIm5iZiI6MTUyMjczMzQ5MywianRpIjoiZWZmZTVkNTU3ODRlYWE0MDY5YTk4ZjExOWRmMjgxOWIiLCJzdWIiOjEsImVtYWlsIjoic3VwZXJhZG1pbkBtYWlsLmNvbSIsInVzZXJfbmFtZSI6InRlc3QiLCJ1aWQiOjF9.uIKRwGD6lO_2W1iHvZXCezBAeygpqk6yDzHqNlvUtsM'
  }
  // todo 重新获取 token，没做
  // if (store.getters.token) {
  //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  if (method === 'GET' && typeof data === 'object') {
    const params = Object.keys(data).map((v, k) => {
      if (data[v] !== undefined) {
        return encodeURIComponent(v) + '=' + encodeURIComponent(data[v])
      }
    }).filter((v) => { return v }).join('&')
    if (params.length > 0) config.url += '?' + params
  }

  if (method === 'POST' || method === 'PATCH' || method === 'PUT' || method === 'DELETE') {
    config['body'] = JSON.stringify(data)
  }

  if (method === 'UPLOAD') {
    config['body'] = data
    config['method'] = 'POST'
    config['headers']['Accept'] = '*/*'
    config['headers']['x-provider'] = 'set'
    delete config['headers']['Content-Type']
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.msg || res.error,
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) { // todo 结合业务进行修改
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // todo 结合业务进行修改
          // store.dispatch('FedLogOut').then(() => {
          //   location.reload()// 为了重新实例化vue-router对象 避免bug
          // })
        })
      }
      // eslint-disable-next-line
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
