import React from 'react';
import { connect } from 'dva';
import styles from './Farmer.css';

function Farmer() {
  return (
    <div className={styles.normal}>
      Route Component: Farmer
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Farmer);
