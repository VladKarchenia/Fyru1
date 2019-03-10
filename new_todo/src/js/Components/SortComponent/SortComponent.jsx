import React from 'react'

import { FILTERS_CONFIG } from './constant_filter'
import styles from './SortComponent.module.scss'

const AnimationComponent = () => (
  <div className={styles.bullet}>
    <div className={styles.zero} />
    <div className={styles.one} />
    <div className={styles.two} />
    <div className={styles.three} />
    <div className={styles.four} />
    <div className={styles.five} />
    <div className={styles.six} />
    <div className={styles.seven} />
  </div>
)

const SortComponent = ({ activeFilter, setVisibilityFilter }) => {
  return (
    <ul className={styles.sortContainer}>
    {
      Object.values(FILTERS_CONFIG).map((filter) => {
        return (
          <li className={styles.sortItem} key={filter}>
            <input type="radio" name="sort" className={styles.sortInput} onClick={() => setVisibilityFilter(filter)} defaultChecked={filter === activeFilter} />
            <label className={styles.sortLabel}>{filter}</label>
            {(filter === activeFilter) && <AnimationComponent />}
          </li>
        )
      })
    }
    </ul>
  )
}

export default SortComponent
