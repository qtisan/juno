import React from 'react';
import styles from './Quite.css';
import { classNames } from '../../../utils/common';

function Divider({children, style = {}}) {

  return <div className={styles.normal}>{children}</div>

}

export default Divider;
