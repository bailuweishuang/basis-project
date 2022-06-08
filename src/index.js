import React from 'react';
import ReactDOM from 'react-dom';
import Route from '@/router';
import Util from '@/js/util';
import 'antd/dist/antd.css';
import Api from '@/js/api';
// import { Provider } from 'react-redux'
import { Provider } from './components/my-redux/provider'
import store from './store'
window.Api = new Api({
  onStart(params, options) {
    return params.params;
  },
});
window.Util = Util;

ReactDOM.render(<Provider store={store}><Route /></Provider>, document.getElementById('app'));
