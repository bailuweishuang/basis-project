import React from "react";
import { createHashHistory } from 'history';
import Demo from './demo';
import { Route, Router, Switch } from 'react-router-dom';

const hashHistory = createHashHistory();

hashHistory.listen(() => {});
export default () => (
  <Router history={hashHistory}>
    <Switch>
      <Route path="/" component={() => [<Demo key="demo" />]} />
    </Switch>
  </Router>
);
