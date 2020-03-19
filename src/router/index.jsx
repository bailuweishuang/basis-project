import React from 'react';
import { createHashHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Demo from './demo';

const hashHistory = createHashHistory();
hashHistory.listen(() => {});
export default () => (
  <Router history={hashHistory}>
    <Switch>
      <Route path="/" component={() => [<Demo key="demo" />]} />
    </Switch>
  </Router>
);
