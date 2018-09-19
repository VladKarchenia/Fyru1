import React, { Component } from 'react'
import styles from './Footer.module.scss'

class Footer extends Component {
  about = () => {
    console.log('about')
  }

  developers = () => {
    console.log('developers')
  }

  suggest = () => {
  console.log('suggest a faeture')
  }

  render() {
    return (
      <div className={styles.footer}>
        <a onClick={this.about} className={styles.a}>About</a>
        <a onClick={this.developers} className={styles.a}>Developers</a>
        <a onClick={this.suggest} className={styles.a}>Suggest a feature</a>
      </div>
    )
  }
}

export default Footer