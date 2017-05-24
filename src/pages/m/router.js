/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from '../../routes/m/IndexPage';
import Hall from '../../routes/m/Hall';
import Deposit from '../../routes/m/Deposit';
import Wall from '../../routes/m/Wall';
import Consume from '../../routes/m/Consume';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/hall" component={Hall} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/wall" component={Wall} />
      <Route path="/consume" component={Consume} />
    </Router>
  );
}

export default RouterConfig;
