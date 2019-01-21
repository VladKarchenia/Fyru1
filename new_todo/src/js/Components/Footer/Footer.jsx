import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <a className={styles.a}>About</a>
    <a className={styles.a}>Developers</a>
    <a className={styles.a}>Suggest a feature</a>
  </div>
)

export default Footer