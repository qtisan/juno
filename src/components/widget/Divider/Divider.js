import React from 'react';
import styles from './Divider.css';
import { classNames } from '../../../utils/common';

function Divider({grey, dark, style}) {
  let className = styles.normal;
  if (dark) {
    className = classNames(className, styles.dark);
  }
  if (grey) {
    className = classNames(className, styles.grey);
  }
  return (
    <hr className={className} style={style} />
  );
}

export default Divider;
