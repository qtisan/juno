/**
 * Created by qtisa on 2017/5/15.
 */
import request from '../utils/request';
import { stringify } from 'querystring';

export async function list(data) {
  console.log(data);
  return request(`/deposit/list?${stringify(data)}`);
}
