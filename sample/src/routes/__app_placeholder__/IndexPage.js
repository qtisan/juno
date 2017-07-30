/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <h1>Sample List</h1>
      <div></div>
      <ul>
        <li><a href="#/Sample" target="_blank">Show List</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
