/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <h1>清单</h1>
      <div></div>
      <ul>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="#/Hall" target="_blank">礼厅查询</a></li>
        <li><a href="#/Deposit" target="_blank">寄存查询</a></li>
        <li><a href="#/Wall" target="_blank">壁葬查询</a></li>
        <li><a href="#/Consume" target="_blank">消费信息查询</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
