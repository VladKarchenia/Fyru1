import React from 'react'

import styles from './Header.module.scss'

const Header = ({ listName, printEnd }) => (
  <div className={styles.header}>
    <div className={styles.listname}>
      <span className={styles.span_listname}>{listName}</span>
    </div>
    <div className={styles.header_buttons}>
      <button className={styles.calcel_btn} onClick={printEnd}>cancel</button>
      <button className={styles.print_btn} onClick={() => print()}>print</button>
    </div>
  </div>
)

export default Header
