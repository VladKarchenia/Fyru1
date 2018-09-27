import React, { PureComponent } from 'react'
import styles from './SortContainer.module.scss'

class SortContainer extends PureComponent {
  render() {
    return (
      // <div className={styles.sortContainer}>
      //   <div>
      //     <input type="radio" className={styles.sort} name='sort' value='active' id='active'/>
      //     <label onClick={() => this.props.changeFilter('active')} className={styles.sortLabel} htmlFor='active'>active</label>
      //   </div>
      //   <div>
      //     <input type="radio" className={styles.sort} name='sort' value='pinned' id='pinned'/>
      //   <label onClick={() => this.props.changeFilter('pinned')} className={styles.sortLabel} htmlFor='pinned'>pinned</label>
      //   </div>
      //   <div>
      //     <input type="radio" className={styles.sort} name='sort' value='completed' id='completed'/>
      //     <label onClick={() => this.props.changeFilter('completed')} className={styles.sortLabel} htmlFor='completed'>completed</label>
      //   </div>
      //   <div>
      //     <input type="radio" className={styles.sort} name='sort' value='all' id='all' defaultChecked />
      //     <label onClick={() => this.props.changeFilter('all')} className={styles.sortLabel} htmlFor='all'>all</label>
      //   </div>
      // </div>

      <ul className={styles.ul}>
        <li className={styles.li} onClick={() => this.props.changeFilter('active')}>
          <input type="radio" name="1" className={styles.input} />
          <label className={styles.label}>active</label>
          <div className={styles.bullet}>
          <div className={styles.zero}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.six}></div>
            <div className={styles.seven}></div>
          </div>
        </li>
        <li className={styles.li} onClick={() => this.props.changeFilter('pinned')}>
          <input type="radio" name="1" className={styles.input} />
          <label className={styles.label}>pinned</label>
          <div className={styles.bullet}>
          <div className={styles.zero}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.six}></div>
            <div className={styles.seven}></div>
          </div>
        </li>
        <li className={styles.li} onClick={() => this.props.changeFilter('completed')}>
          <input type="radio" name="1" className={styles.input} />
          <label className={styles.label}>completed</label>
          <div className={styles.bullet}>
          <div className={styles.zero}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.six}></div>
            <div className={styles.seven}></div>
          </div>
        </li>
        <li className={styles.li} onClick={() => this.props.changeFilter('all')}>
          <input type="radio" name="1" defaultChecked className={styles.input} />
          <label className={styles.label}>all</label>
          <div className={styles.bullet}>
            <div className={styles.zero}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.six}></div>
            <div className={styles.seven}></div>
          </div>
        </li>
      </ul>
    )
  }
}

export default SortContainer
