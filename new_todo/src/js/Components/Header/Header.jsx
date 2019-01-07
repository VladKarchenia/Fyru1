import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <a className={styles.a}>Log in</a>
    <a className={styles.newList}>New List</a>
  </div>
)

export default Header
