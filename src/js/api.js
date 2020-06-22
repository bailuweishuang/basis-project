import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class Api {
  static get = axios.get;
  static post = axios.post;
  constructor(config = {}) {
    this.config = {
      baseURL: '',
      ...config,
      // `transformRequest` 允许在向服务器发送前，修改请求数据
      // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
      // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
      transformRequest: [
        (data) => {
          const result = data;
          return result;
        },
      ].concat(config.transformRequest ? config.transformRequest : []),
      // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
      transformResponse: [
        (data) => {
          const result = data;
          return result;
        },
      ].concat(config.transformResponse ? config.transformResponse : []),
      // `headers` 是即将被发送的自定义请求头
      headers: {
        ...config.headers,
      },
    };
  }
  getConfig(config = {}) {
    const newConfig = {
      ...this.config,
      ...config,
      headers: {
        ...this.config.headers,
        ...config.headers,
      },
    };
    return newConfig;
  }
}
export default Api;
