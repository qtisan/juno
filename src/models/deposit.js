/**
 * Created by qtisa on 2017/5/15.
 */

import { depositService } from '../services';

export default {
  namespace: 'deposit',
  state: {
    list: [],
    loading: false
  },
  reducers: {
    search(state, {payload: {list}}) {
      return { ...state, list: list };
    }
  },
  effects: {
    *submit({payload}, {call, put}) {
      let response = yield call(depositService.list, {payload});
      yield put({type: 'search', payload: { list: response.data.data }});
    }
  }
}
