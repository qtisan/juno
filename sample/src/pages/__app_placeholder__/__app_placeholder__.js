/**
 * Created by qtisa on 2017/7/30.
 */

import dva from 'dva';
import './__app_placeholder__.css';
import _ from 'lodash';
import {startApp} from '../../utils/common';
import * as models from '../../models/__app_placeholder__';

import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import IndexPage from '../../routes/__app_placeholder__/IndexPage';
import Sample from '../../routes/__app_placeholder__/Sample';
import RandomDataGenerator from '../../routes/__app_placeholder__/RandomDataGenerator';

// 1. Initialize
const app = dva();

const router = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/index_page" component={IndexPage} />
      <Route path="/sample" component={IndexPage} >
        <IndexRedirect to="/sample/fetch/fetch_1"/>
      </Route>
      <Route path="/sample/fetch" component={IndexPage} >
        <IndexRedirect to="/sample/fetch/fetch_1"/>
      </Route>
      <Route path="/sample/fetch/fetch_1" component={Sample} />
      <Route path="/sample/fetch/fetch_2" component={Sample} />
      <Route path="/sample/random_data_generator" component={RandomDataGenerator} />
    </Router>
  );
};

startApp(app, router, _.values(models));


