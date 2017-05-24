/**
 * Created by qtisa on 2017/5/15.
 */

import { consumeService } from '../services';
import {Toast} from 'antd-mobile';

export default {
  namespace: 'consume',
  state: {
    goods: [],
    payroll: 0,
    exchange: 0,
    loading: false
  },
  reducers: {
    search(state, { payload }) {
      if (!payload) {
        Toast.info('查不到该数据记录！');
      }
      return { ...state, ...payload };
    }
  },
  effects: {
    *submit({payload: {name, cremation, year}}, {call, put}) {
      let response = yield call(consumeService.list, {name, cremation, year});
      yield put({type: 'search', payload: { ...response.data.data }});
    }
  }
}
