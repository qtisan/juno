/**
 * Created by qtisa on 2017/7/31.
 */

export default {
  namespace: 'random_data_generator',
  state: {
    num: 0,
    loading: false
  },
  reducers: {
    submit(state, {payload: {num}}) {
      return { ...state, num: (Math.random() * 100).toFixed(2) };
    }
  }
}
