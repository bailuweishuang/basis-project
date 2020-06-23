import React, { Suspense } from 'react';
import { createHashHistory } from 'history';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Demo from './demo';
import { Menus, Login } from '@/components';

const hashHistory = createHashHistory();
hashHistory.listen(() => {});
export default () => (
  <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={() => <Redirect push to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={() => [<Demo key="demo" />]} />
        <Route exact component={Menus} />
      </Switch>
  </Router>
);
