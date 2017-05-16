import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from '../routes/IndexPage';

import Farmer from "../routes/Farmer.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/farmer" component={Farmer} />
    </Router>
  );
}

export default RouterConfig;
