/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { connect } from 'dva';
import './index.css';

import Wrapper from './Wrapper';
import { createForm } from 'rc-form';

function IndexPage({dispatch, content}) {
  return (
    <Wrapper>
      <h1>{content}</h1>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  const {content} = state.index_page;
  return {
    content,
    loading: state.loading.models.index_page
  };
}

export default connect(mapStateToProps)(createForm()(IndexPage));

