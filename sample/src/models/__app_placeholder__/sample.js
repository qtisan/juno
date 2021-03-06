
import { sampleService } from '../../services/__app_placeholder__';

export default {
  namespace: 'sample',
  state: {
    list: [],
    columns: [],
    loading: false
  },
  reducers: {
    search(state, {payload: {list, columns}}) {
      if (!list.length) {
        alert('查不到该数据记录！');
      }
      return { ...state, list: list, columns };
    }
  },
  effects: {
    *submit({payload}, {call, put}) {
      let res = yield call(sampleService.list, {payload});
      yield put({type: 'search', payload: res});
    }
  }
}
