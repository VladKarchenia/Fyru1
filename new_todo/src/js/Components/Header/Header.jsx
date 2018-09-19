import React, { Component } from 'react'
import styles from './Header.module.scss'

class Header extends Component {
  logIn = () => {
    console.log('log in')
  }

  newList = () => {
    console.log('new list')
  }
  
  render() {
    return (
      <div className={styles.header}>
        <a onClick={this.logIn} className={styles.a}>Log in</a>
        <a onClick={this.newList} className={styles.newList}>New List</a>
      </div>
    )
  }
}

export default Header
