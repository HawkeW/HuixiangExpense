import Request from '@/js_sdk/luch-request/luch-request/index.js'
import store from '../../store/index.js'

const http = new Request();
http.setConfig((config) => {
  config.baseURL = 'http://129.211.77.253:8000'; 
  return config
})
export default {
  instance: (url, method, params = {}, header = {}) => {

    // 请求拦截
    let before = http.interceptors.request.use((config) => {
      config.header = {
        ...config.header,
      }
      return config
    }, config => {
      return Promise.reject(config)
    })
    // 响应拦截
    let after = http.interceptors.response.use((response) => {
      console.log("响应拦截")
      return response
    }, (response) => {
      console.log(response)
      return Promise.reject(response)
    })

    const options = {
      url,
      method,
      header: {
        ContentType: "application/json",
        ...header
      },
    }
    if (method === 'get') {
      options.params = params;
    } else {
      options.data = params;
    }
    console.log(options)
    let instance = http.request(options);

    return instance;

  }
}
