/**
 * Created by qtisa on 2017/7/31.
 */
import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './index.css';
import globalStyle from '../../utils/global.css';
import Wrapper from './Wrapper';

import { Button, Table } from 'antd';
import { createForm } from 'rc-form';


function RandomDataGenerator({dispatch, num, loading}) {

  function submit() {
    dispatch({
      type: 'random_data_generator/submit',
      payload: {}
    });
  }

  return (
    <Wrapper>
      <div className={styles.normal}>
        <Button type="danger" onClick={submit}>Generate</Button>
      </div>
      <h1>{num}</h1>
    </Wrapper>
  );

}


function mapStateToProps(state) {
  const {num} = state.random_data_generator;
  return {
    num,
    loading: state.loading.models.random_data_generator
  };
}

export default connect(mapStateToProps)(createForm()(RandomDataGenerator));
