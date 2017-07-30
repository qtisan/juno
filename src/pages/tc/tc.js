/**
 * Created by qtisa on 2017/7/30.
 */

import dva from 'dva';
import './tc.css';
import _ from 'lodash';
import {startApp} from '../../utils/common';
import * as models from '../../models/tc';

import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from '../../routes/tc/IndexPage';
import Sample from '../../routes/tc/Sample';

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


