/**
 * Created by qtisa on 2017/5/24.
 */

import { wallService } from '../../services/m';
import {Toast} from 'antd-mobile';

export default {
  namespace: 'wall',
  state: {
    list: [],
    loading: false
  },
  reducers: {
    search(state, {payload: {list}}) {
      if (!list.length) {
        alert('查不到该数据记录！');
      }
      return { ...state, list: list };
    }
  },
  effects: {
    *submit({payload}, {call, put}) {
      let list = yield call(wallService.list, {payload});
      yield put({type: 'search', payload: { list }});
    }
  }
}
