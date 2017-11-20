/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { connect } from 'dva';

import { Button, WhiteSpace } from 'antd-mobile';
import { redirect } from '../../utils/common';

function IndexPage({dispatch}) {
  return (
    <div>
      <div style={{padding: 20, backgroundColor: '#000', textAlign: 'center'}}>
        <h3 style={{color: '#fff'}}>殡仪馆自助查询系统</h3>
      </div>
      <WhiteSpace />
      <WhiteSpace />
      <div style={{padding: 50}}>
        <Button type="primary" onClick={redirect(dispatch, '/Hall')}>礼厅查询</Button>
        <WhiteSpace />
        <Button type="primary" onClick={redirect(dispatch, '/Deposit')}>寄存查询</Button>
        <WhiteSpace />
        <Button type="primary" onClick={redirect(dispatch, '/Wall')}>壁葬查询</Button>
        <WhiteSpace />
        <Button type="primary" onClick={redirect(dispatch, '/Consume')}>消费信息查询</Button>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
