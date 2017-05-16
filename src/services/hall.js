/**
 * Created by qtisa on 2017/5/15.
 */
import request from '../utils/request';

export async function list(...data) {
  return request('/hall/list', {
    data: data
  });
}
