/**
 * Created by qtisa on 2017/7/31.
 */
import React from 'react';
import { connect } from 'dva';

import CommonLayout from '../../layouts/tc/CommonLayout';
import { createForm } from 'rc-form';

function Wrapper({dispatch, children, title, menus}) {
  return (
    <CommonLayout title={title} menus={menus}>
      {children}
    </CommonLayout>
  );
}

function mapStateToProps(state) {
  const {title, menus} = state.wrapper;
  return {
    title, menus,
    loading: state.loading.models.wrapper
  };
}

export default connect(mapStateToProps)(createForm()(Wrapper));

