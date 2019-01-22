import React, { PureComponent } from 'react'
import classNames from 'classnames/bind'

import { FILTERS_CONFIG } from '../../../../../../TodoList/apps/SortComponent/constant_filter'
import styles from './Options.module.scss'

const cx = classNames.bind(styles)

class Options extends PureComponent {
  state = {
    selectedOption: 'landscape',
    activeFilter: this.props.filter,
    items: this.props.items,
  }

  handleOptionChange = (e) => this.setState({
    selectedOption: e.target.value
  })

  handleFilterChange = (e) => this.setState({
    activeFilter: e.target.value
  })

  render () {
    const { setVisibilityFilter } = this.props
    const { selectedOption, activeFilter } = this.state
    console.log(activeFilter)
    return (
      <div className={styles.options}>
        <div className={styles.layout}>
          <div className={styles.orientation_container}>
            <span className={styles.orientation_titleSpan}>layout</span>
            <div className={styles.orientation}>
              <span>page orientation</span>
              <div>
                <form className={cx('orientation_types', { landscape_orientation: selectedOption === 'landscape' }, { portrait_orientation: selectedOption === 'portrait' })}>
                  <div>
                    <label className={styles.landscape_label}>
                      <input
                      type="radio"
                      className={styles.orientation_types_input}
                      value="landscape"
                      name="react-tips"
                      onChange={this.handleOptionChange}
                      />
                      landscape
                    </label>
                  </div>
                  <div>
                    <label className={styles.portrait_label}>
                      <input
                      type="radio"
                      className={styles.orientation_types_input}
                      value="portrait"
                      name="react-tips"
                      onChange={this.handleOptionChange}
                      />
                      portrait
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.custom_common}>
            <span>use custom header</span>
            <input type="checkbox" className={styles.custom_common_input} />
            <label className={styles.custom_common_label}></label>
          </div>
          <div className={styles.custom_common}>
            <span>use custom footer</span>
            <input type="checkbox" className={styles.custom_common_input} />
            <label className={styles.custom_common_label}></label>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.orientation_titleSpan}>print filter</span>
          <ul className={styles.filter_ul}>
            {
              Object.values(FILTERS_CONFIG).map((filter) => {
                return (
                  <li key={filter} className={styles.filter_li}>
                    <label className={cx({ checked_label: filter === activeFilter }, { filterLabel: filter !== activeFilter })}>
                      <input type="radio" onChange={this.handleFilterChange} value={filter} className={styles.filter_radio} onClick={() => setVisibilityFilter(filter)} />
                      {filter}
                    </label>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Options
