/**
 * Created by qtisa on 2017/5/15.
 */

import dva from 'dva';
import './m.css';
import _ from 'lodash';
import {startApp} from '../../utils/common';
import * as models from '../../models';

// 1. Initialize
const app = dva();

startApp(app, require('./router'), _.values(models));


