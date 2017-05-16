/**
 * Created by qtisa on 2017/5/15.
 */

import { routerRedux } from 'dva/router';
import moment from 'moment';
import { hallService } from '../services';

export default {
  namespace: 'hall',
  state: {
    list: []
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
      console.log(response);
      yield put({type: 'search', payload: { list: response.data.data }});
    }
  }
}
