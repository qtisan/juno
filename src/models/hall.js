/**
 * Created by qtisa on 2017/5/15.
 */

import moment from 'moment';
import { hallService } from '../services';

export default {
  namespace: 'hall',
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
    *submit({payload: {name, gender, date}}, {call, put}) {
      let formattedDate = moment(date, 'YYYY-MM-DD');
      let list = yield call(hallService.list, {name, gender, date: formattedDate});
      yield put({type: 'search', payload: { list }});
    }
  }
}
