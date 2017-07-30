import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './index.css';
import globalStyle from '../../utils/global.css';
import CommonLayout from '../../layouts/tc/CommonLayout';

import { Button, Table } from 'antd';
import { createForm } from 'rc-form';


function Sample({dispatch, list, columns, loading}) {

  function submit() {
    dispatch({
      type: 'sample/submit',
      payload: {}
    });
  }

  return (
    <CommonLayout title={'Sample List'}>
      <div className={styles.normal}>
        <Button type="primary" onClick={submit}>Get</Button>
      </div>
      <Table rowKey="id" columns={columns} dataSource={list} />
    </CommonLayout>
  );

}


function mapStateToProps(state) {
  const {list, columns} = state.sample;
  return {
    list,
    columns,
    loading: state.loading.models.sample
  };
}

export default connect(mapStateToProps)(createForm()(Sample));
