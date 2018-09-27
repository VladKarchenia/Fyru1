import React, { PureComponent } from 'react'
import styles from './SortContainer.module.scss'

class SortContainer extends PureComponent {
  render() {
    return (
      <div className={styles.sortContainer}>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='active' id='active'/>
          <label onClick={() => this.props.changeFilter('active')} className={styles.sortLabel} htmlFor='active'>active</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='pinned' id='pinned'/>
        <label onClick={() => this.props.changeFilter('pinned')} className={styles.sortLabel} htmlFor='pinned'>pinned</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='completed' id='completed'/>
          <label onClick={() => this.props.changeFilter('completed')} className={styles.sortLabel} htmlFor='completed'>completed</label>
        </div>
        <div>
          <input type="radio" className={styles.sort} name='sort' value='all' id='all' />
          <label onClick={() => this.props.changeFilter('all')} className={styles.sortLabel} htmlFor='all'>all</label>
        </div>
      </div>
    )
  }
}

export default SortContainer
