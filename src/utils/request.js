import Taro, { Events } from '@tarojs/taro'
import { getToken } from './storage'

export const DefaultOptions = {
  header: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  dataType: 'json'
}

/**
 * @param {*请求地址} url 
 * @param {参数} data 
 * @param {请求头} header 
 * @param {} method 
 * @param { 设置为json ，会默认进行一次JSON.parse 操作} dataType 
 * 当返回的 statusCode != 200  || errno != 0 时 通过reject 返回
 * 只有网络请求正常返回，且 errno == 0 通过resolve 返回
 */
export const request = (url = '', data = {}, header = DefaultOptions.header, method = DefaultOptions.method, dataType = 'json') => {
  
  if (url == null || url == '' || typeof url != 'string') {
    return Promise.reject({ errno: 901, errmsg: '请求地址错误', data: url })
  }
  // alert(url)
  return Taro.request({
    url,
    data,
    header,
    method,
    dataType
  }).catch(err => {
    return Promise.reject({ errno: 902, errmsg: '网络请求错误', data: err })
  }).then(res => {
    //console.log(res)
    if (res.statusCode == '200') {
      if (res.data.code == 0) {
        return res.data
      } else if (res.data.code == 401) {
        Taro.navigateTo({
          url: '/pages/login/index'
        })
      } else {
        return Promise.reject(res.data)
      }
    } else {
      return Promise.reject({ errno: 903, errmsg: '网络请求错误:' + res.statusCode, data: res })
    }
  })
}

 export const request2 = (url = '', data = {}, header = {'content-type': 'application/x-www-form-urlencoded'}, method = DefaultOptions.method, dataType = 'json') => {
  
  if (url == null || url == '' || typeof url != 'string') {
    return Promise.reject({ errno: 901, errmsg: '请求地址错误', data: url })
  }
  // alert(url)
  return Taro.request({
    url,
    data,
    header,
    method,
    dataType
  }).catch(err => {
    return Promise.reject({ errno: 902, errmsg: '网络请求错误', data: err })
  }).then(res => {
    //console.log(res)
    if (res.statusCode == '200') {
      if (res.data.code == 0) {
        return res.data
      } else if (res.data.code == 10034) {
        return res.data
      } else if (res.data.code == 401) {
        Taro.navigateTo({
          url: '/pages/login/index'
        })
      } else {
        return Promise.reject(res.data)
      }
    } else {
      return Promise.reject({ errno: 903, errmsg: '网络请求错误:' + res.statusCode, data: res })
    }
  })
}
/**
 * post 请求
 * @param {} url 
 * @param {*} data 
 */
export const post = (url, data) => {
  return request(url, data)
}

 /**
 * post 请求
 * @param {} url 
 * @param {*} data 
 */
export const post2 = (url, data) => {
  return request2(url, data)
}
/**
 * get请求
 * @param {} url 
 * @param {*} data 
 */
export const get = (url, data) => {
  return request(url, data, null, 'GET')
}



/**
 * @param {} chain 
 * 当请求返回时errno 时401 时，需要全局的通知时间  needLogin
 */
const requestInterceptor = function (chain) {
  const requestParams = chain.requestParams
  /**
   * 设置token 
   */
  requestParams.header = {
    ...requestParams.header,
    // 'X-Nideshop-Token': getToken()
  }
  return chain.proceed(requestParams)
    .then(res => {
      if (res.statusCode == '200' && res.data.errno == 401) {
        alertNeedLogin()
        Taro.eventCenter.trigger('needLogin', res.data)
      }
      return res
    })
}

/**
 * 提示
 */
let alertIndex = 0
const alertNeedLogin = () => {
  if (alertIndex > 0) {
    return;
  }
  alertIndex = 1
  Taro.showModal({
    content: '请先登录',
    success: function (params) {
      alertIndex = 0
      if (params.confirm) {
        Taro.navigateTo({
          url: '/pages/auth/pages/index'
        })
      } else {
        Taro.navigateBack()
      }
    },
    fail:function() {
      alertIndex = 0
    }
  })
}

Taro.addInterceptor(requestInterceptor)