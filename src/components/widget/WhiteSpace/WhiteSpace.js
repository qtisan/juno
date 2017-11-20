import React from 'react';
import styles from './WhiteSpace.css';

function WhiteSpace({size = 32}) {
  return (
    <div className={styles.normal} style={{height: `${size}px`}}>
    </div>
  );
}

export default WhiteSpace;
