import React from 'react'

import styles from './Footer.module.scss'

const Footer = ({ count }) => (
  <div className={styles.footer}>
    <div className={styles.counter}>{`Total Count: ${count}`}</div>
    <div className={styles.links}>
      <a className={styles.a}>About</a>
      <a className={styles.a}>Developers</a>
      <a className={styles.a}>Suggest a feature</a>
    </div>
  </div>
)

export default Footer
