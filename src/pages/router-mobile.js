/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from '../routes/m/IndexPage';
import Hall from '../routes/m/Hall';
import Deposit from '../routes/m/Deposit';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/hall" component={Hall} />
      <Route path="/deposit" component={Deposit} />
    </Router>
  );
}

export default RouterConfig;
