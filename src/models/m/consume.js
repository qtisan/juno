/**
 * Created by qtisa on 2017/5/15.
 */

import { consumeService } from '../../services/m';
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
        alert('查不到该数据记录！');
      }
      return { ...state, ...payload };
    }
  },
  effects: {
    *submit({payload: {name, cremation, year}}, {call, put}) {
      let data = yield call(consumeService.list, {name, cremation, year});
      yield put({type: 'search', payload: { ...data }});
    }
  }
}
