/**
 * Created by qtisa on 2017/5/15.
 */

import createLoading from 'dva-loading';
import { routerRedux } from 'dva/router';

export const startApp = (app, router, models, plugins, container) => {

// 2. Plugins
// app.use({});
  app.use(createLoading());
  plugins && plugins.length && plugins.forEach(plugin => app.use(plugin));

// 3. Model
// app.model(require('./models/example'));
  models && models.length && models.forEach(model => app.model(model));

// 4. Router
  app.router(router);

// 5. Start
  app.start(container || '#root');

};

export const classNames = (...styles) => styles.join(' ');

export const redirect = (dispatch, link) => () => dispatch(routerRedux.push(link));


