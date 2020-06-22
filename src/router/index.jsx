import React, { Suspense } from 'react';
import { createHashHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Demo from './demo';
import { Menus, Login } from '@/components';

const hashHistory = createHashHistory();
hashHistory.listen(() => {});
export default () => (
  <Router history={hashHistory}>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={() => [<Demo key="demo" />]} />
        <Route exact component={Menus} />
      </Switch>
    </Suspense>
  </Router>
);
