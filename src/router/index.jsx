import React, { Suspense } from 'react';
import { createHashHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Demo from './demo';
import { Menus } from '@/components';

const hashHistory = createHashHistory();
hashHistory.listen(() => {});
export default () => (
  <Router history={hashHistory}>
    <Suspense fallback={null}>
      <Switch>
        <Route component={Menus} />
        <Route path="/demo" component={() => [<Demo key="demo" />]} />
      </Switch>
    </Suspense>
  </Router>
);
