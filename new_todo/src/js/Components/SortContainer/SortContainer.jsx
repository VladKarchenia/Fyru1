import React, { Component } from 'react'
import styles from './SortContainer.module.scss'

class SortContainer extends Component {

  render() {
    return (
      <div className={styles.sortContainer}>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='completed' id='completed'/>
          <label className={styles.sortLabel} htmlFor='completed'>completed</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='active' id='active'/>
          <label className={styles.sortLabel} htmlFor='active'>active</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='pinned' id='pinned'/>
          <label className={styles.sortLabel} htmlFor='pinned'>pinned</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='all' id='all' />
          <label className={styles.sortLabel} htmlFor='all'>all</label>
        </div>
      </div>
    )
  }
}

export default SortContainer
