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
      return { ...state, list: list };
    }
  },
  effects: {
    *submit({payload: {name, gender, date}}, {call, put}) {
      let formattedDate = moment(date, 'YYYY-MM-DD');
      let response = yield call(hallService.list, {name, gender, date: formattedDate});
      yield put({type: 'search', payload: { list: response.data.data }});
    }
  }
}
