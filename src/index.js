import React from 'react';
import ReactDOM from 'react-dom';
import Route from '@/router';
import Util from '@/js/util';
import 'antd/dist/antd.css';

window.Util = Util;

ReactDOM.render(<Route />, document.getElementById('app'));
