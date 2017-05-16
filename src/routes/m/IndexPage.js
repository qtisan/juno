/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <h1>Yay! Welcome to dva!</h1>
      <div></div>
      <ul>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
