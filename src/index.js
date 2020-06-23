import React from 'react';
import ReactDOM from 'react-dom';
import Route from '@/router';
import Util from '@/js/util';
import 'antd/dist/antd.css';
import Api from '@/js/api';

window.Api = new Api({
  onStart(params, options) {
    return params.params;
  },
});
window.Util = Util;

ReactDOM.render(<Route />, document.getElementById('app'));
