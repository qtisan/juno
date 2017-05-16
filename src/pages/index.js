import dva from 'dva';
import './index.css';
import {startApp} from '../utils/common';

// 1. Initialize
const app = dva();

startApp(app, require('./router'),
  [
    require('../models/menu')
  ]
);
