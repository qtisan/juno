
import request from '../../utils/request';
import { stringify } from 'querystring';
import { parse } from '../../utils/parser';
import uuid from 'uuid/v4';

export function *list(data) {
  let res = yield request(`/__app_placeholder__/sample/list?${stringify(data)}`);
  console.log(res);
  if (!res.data.success) {
    console.error(res.data.message);
  }
  let list = res.data.data;
  let columns = res.data.columns;
  return {list, columns};
}
