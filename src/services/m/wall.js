/**
 * Created by qtisa on 2017/5/24.
 */
import request from '../../utils/request';
import { stringify } from 'querystring';
import { parse } from '../../utils/parser';
import uuid from 'uuid/v4';

export function *list(data) {
  let res = yield request(`/middle/wall/list?${stringify(data)}`);
  console.log(res);
  if (!res.data.success) {
    console.error(res.data.message);
  }
  let list = res.data.data;
  return parse(list, {
    id: uuid(),
    name: 'deadname',
    gender: 'deadsex',
    age: 87,
    expired: 'enddate',
    position: 'tname'
  });
}
