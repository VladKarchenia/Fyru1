import React, { PureComponent } from 'react'

import styles from './Header.module.scss'

class Header extends PureComponent {
  render () {
    const { listName, printEnd } = this.props
    return (
      <div className={styles.header}>
        <div className={styles.listname}>
          <span className={styles.span_listname}>{listName}</span>
        </div>
        <div className={styles.header_buttons}>
          <button className={styles.calcel_btn} onClick={printEnd}>cancel</button>
          <button className={styles.print_btn}>print</button>
        </div>
      </div>
    )
  }
}

export default Header
