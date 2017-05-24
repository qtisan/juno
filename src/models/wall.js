/**
 * Created by qtisa on 2017/5/24.
 */

import { wallService } from '../services';

export default {
  namespace: 'wall',
  state: {
    list: [],
    loading: false
  },
  reducers: {
    search(state, {payload: {list}}) {
      if (!list.length) {
        Toast.info('查不到该数据记录！');
      }
      return { ...state, list: list };
    }
  },
  effects: {
    *submit({payload}, {call, put}) {
      let response = yield call(wallService.list, {payload});
      yield put({type: 'search', payload: { list: response.data.data }});
    }
  }
}
