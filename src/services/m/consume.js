/**
 * Created by qtisa on 2017/5/24.
 */

import request from '../../utils/request';
import { stringify } from 'querystring';
import { parse } from '../../utils/parser';
import uuid from 'uuid/v4';
import _ from 'lodash';

export function *list(data) {
  let res = yield request(`/middle/consume/list?${stringify(data)}`);
  console.log(res);
  if (!res.data.success) {
    console.error(res.data.message);
  }
  let list = res.data.data;
  let result = {
    exchange: _.reduce(list, (total, n) => total + n.prdamount, 0).toFixed(2)
  };
  result.payroll = (parseFloat(result.exchange) + _.reduce(list, (total, n) => total + n.prdpre, 0)).toFixed(2);
  result.goods = list.map(i => ({
    id: uuid(),
    title: i.prdname,
    count: i.prdcount,
    price: i.prdprice,
    date: i.billdatecn.substr(0, 10)
  }));
  return result;
}
