/**
 * Created by qtisa on 2017/5/15.
 */
import React from 'react';
import styles from './CommonLayout.css';

function CommonLayout({ children, headerImage }) {
  return (
    <div className={styles.normal}>
      <img src={headerImage} style={{width: '100%'}} />
      {children}
    </div>
  );
}

export default CommonLayout;
