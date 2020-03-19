import React, { lazy, Suspense } from 'react';
import { createHashHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import { Errors } from '@/components';
const hashHistory = createHashHistory();
const Demo = lazy(() => import('@/pages/dome'));

hashHistory.listen(() => {});

export default () => (
  <Router history={hashHistory}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/demo" component={Demo} />
        <Route component={Errors} />
      </Switch>
    </Suspense>
  </Router>
);
