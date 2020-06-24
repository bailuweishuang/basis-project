import axios from 'axios';
import Util from './util';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class Api {
  static get = axios.get;
  static post = axios.post;
  constructor(config = {}) {
    this.config = {
      suffix: '.json',
      onStart: () => null,
      onEnd: () => null,
      onFail: () => null,
      onFilterCatch: () => true,
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
    if (Util.isFunction(this.config.transformHeaders)) {
      this.config.headers = this.config.transformHeaders(this.config.headers);
    }
    this.addSuffix = (url, suffix) => {
      const suffixExp = new RegExp('\\.json$');
      if (!suffixExp.test(url)) {
        return `${url}${suffix}`;
      }
      return url;
    };
  }
  getConfig(config = {}) {
    const newConfig = {
      ...this.config,
      ...config,
      cancelToken: source.token,
      headers: {
        ...this.config.headers,
        ...config.headers,
      },
    };
    return newConfig;
  }
  create(url, params, config) {
    const createConfig = this.getConfig(config);
    const { onStart, onEnd, onFilterCatch, onFail, ...moreCreateConfig } = createConfig;
    const newUrl = this.addSuffix(url, createConfig.suffix);
    const newParams = createConfig.onStart(
      {
        url: newUrl,
        params,
      },
      createConfig,
    );
    const get = ($params, $config) => {
      const { shallowTrimParams, ...moreConfig } = $config;
      const $$params = $params || {};
      if (shallowTrimParams && Util.isObject($$params)) {
        let tmp;
        Object.keys($$params).forEach((key) => {
          tmp = $$params[key];
          if (Util.isString(tmp)) {
            $$params[key] = tmp.trim();
          }
        });
      }
      const result = axios.create(moreConfig).get(newUrl, {
        params: {
          t: Date.now(),
          ...$$params,
        },
      });
      return result;
    };
    const post = ($params, $config) => {
      const $$config = {
        ...$config,
        headers: {
          ...$config.headers,
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const { shallowTrimParams, ...moreConfig } = $$config;
      const $$params = $params || {};
      if (shallowTrimParams && Util.isObject($$params)) {
        let tmp;
        Object.keys($$params).forEach((key) => {
          tmp = $$params[key];
          if (Util.isString(tmp)) {
            $$params[key] = tmp.trim();
          }
        });
      }
      const result = axios
        .create({
          ...moreConfig,
          url: newUrl,
          method: 'post',
          withCredentials: true,
          params: {
            t: Date.now(),
          },
          data: Util.isString($params) ? $params : JSON.stringify($$params),
        })
        .request();
      return result;
    };
    const done = async (cb, $params, $config) => {
      let res;
      if (newParams !== false) {
        try {
          const result = await cb($params, $config);
          res = JSON.parse(result.data);
          onEnd(res, result, moreCreateConfig);
          if (onFilterCatch(res)) {
            res = Promise.resolve(res);
          } else {
            res = Promise.reject(res);
          }
        } catch (e) {
          onFail(e, moreCreateConfig);
          res = Promise.reject(e);
        }
      } else {
        res = Promise.reject();
      }
      return res;
    };
    return {
      get: () => {
        const result = done(get, newParams, moreCreateConfig);
        return result;
      },
      post: () => {
        const result = done(post, newParams, moreCreateConfig);
        return result;
      },
    };
  }

  action(url, params, config = {}, type = 'get') {
    const res = this.create(url, params, config)[
      ['get', 'post'].indexOf(type) > -1 ? type : 'get'
    ]();
    res.data = async (defaultValue) => {
      const response = await res;
      const { data } = response;
      return data === undefined || data === null ? defaultValue : data;
    };
    return res;
  }

  get(url, params, config = {}) {
    return this.action(url, params, config);
  }

  post(url, params, config = {}) {
    return this.action(url, params, config, 'post');
  }
}
export default Api;
