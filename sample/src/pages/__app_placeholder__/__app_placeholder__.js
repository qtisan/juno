/**
 * Created by qtisa on 2017/7/30.
 */

import dva from 'dva';
import './__app_placeholder__.css';
import _ from 'lodash';
import {startApp} from '../../utils/common';
import * as models from '../../models/__app_placeholder__';

import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from '../../routes/__app_placeholder__/IndexPage';
import Sample from '../../routes/__app_placeholder__/Sample';

// 1. Initialize
const app = dva();

const router = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/Sample" component={Sample} />
    </Router>
  );
};

startApp(app, router, _.values(models));


