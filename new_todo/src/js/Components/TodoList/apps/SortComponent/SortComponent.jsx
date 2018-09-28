import React from 'react'
import styles from './SortComponent.module.scss'

const FILTERS_CONFIG = ['active', 'pinned', 'completed', 'all']

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
    
const SortComponent = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>
      <input type="radio" name="1" className={styles.input} onClick={() => this.props.changeFilter('active')} />
      <label className={styles.label}>active</label>
      <AnimationComponent />
    </li>
    <li className={styles.li}>
      <input type="radio" name="1" className={styles.input} onClick={() => this.props.changeFilter('pinned')} />
      <label className={styles.label}>pinned</label>
      <AnimationComponent />
    </li>
    <li className={styles.li}>
      <input type="radio" name="1" className={styles.input} onClick={() => this.props.changeFilter('completed')} />
      <label className={styles.label}>completed</label>
      <AnimationComponent />
    </li>
    <li className={styles.li}>
      <input type="radio" name="1" defaultChecked className={styles.input} onClick={() => this.props.changeFilter('all')} />
      <label className={styles.label}>all</label>
      <AnimationComponent />
    </li>
  </ul>
)

export default SortComponent
