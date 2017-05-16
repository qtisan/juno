/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import styles from './CommonLayout.css';

function CommonLayout({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

export default CommonLayout;
