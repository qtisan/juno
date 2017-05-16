import * as menuService from '../services/menu';

export default {
  namespace: 'menu',
  state: {
    list: []
  },
  reducers: {

  },
  effects: {
    *fetch({call, put}) {
      const data = call(menuService.list);
      yield put({type: 'list', payload: {data}});
    }
  },
  subscriptions: {

  }
};
