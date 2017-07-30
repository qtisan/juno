
import React from 'react';
import styles from './CommonLayout.css';

function CommonLayout({ children, title }) {
  return (
    <div className={styles.normal}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default CommonLayout;
