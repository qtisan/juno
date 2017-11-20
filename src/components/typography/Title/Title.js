import React from 'react';
import styles from './Title.css';
import { classNames } from '../../../utils/common';

function Divider({children, size = 'normal', attach = '', style = {}}) {
  let title;
  let grey = styles.grey_title;
  let grey_title_underline = classNames(styles.underline, grey);
  let grey_title_leftbar = classNames(styles.leftbar, grey);
  switch (size) {
    case 'tiny' :
      title = <h3 className={grey_title_underline} style={style} >{children}&nbsp;&nbsp;{attach}</h3>;
      break;
    case 'normal':
      title = <h2 className={grey_title_leftbar} style={style} >{children}&nbsp;&nbsp;{attach}</h2>;
      break;
    default:
      title = <h2 className={styles.normal} style={style} >{children}&nbsp;&nbsp;{attach}</h2>;
      break;
  }
  return title;
}

export default Divider;
