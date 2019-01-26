import React, { PureComponent } from 'react'
import classNames from 'classnames/bind'

import { FILTERS_CONFIG } from '../../../../../../TodoList/apps/SortComponent/constant_filter'
import styles from './Options.module.scss'

const cx = classNames.bind(styles)

class Options extends PureComponent {
  state = {
    selectedOrientation: this.props.orientation,
    selectedCustomHeader: false,
    selectedCustomFooter: false,
  }

  handleOrientationChange = () => {
    const { setOrientation } = this.props
    if (this.state.selectedOrientation !== this.props.orientation) {
      return this.setState({
        selectedOrientation: 'portrait'
      })
    } else {
      return this.setState({
        selectedOrientation: 'landscape'
      })
    }
    setOrientation(this.state.selectedOrientation)
  }
  
  handleCustomHeaderChange = () => this.setState({
    selectedCustomHeader: !this.state.selectedCustomHeader
  })

  handleCustomFooterChange = () => this.setState({
    selectedCustomFooter: !this.state.selectedCustomFooter
  })

  render () {
    const { selectedOrientation, selectedCustomHeader, selectedCustomFooter } = this.state
    const { activeFilter, setPrintVisibilityFilter } = this.props
    return (
      <div className={styles.options}>
        <div>
          <div>
            <span className={styles.orientation_titleSpan}>layout</span>
            <div className={styles.orientation}>
              <span>page orientation</span>
              <div className={styles.orientation_types}>
                <div className={cx({ active_orientation: selectedOrientation === 'landscape' })} onClick={this.handleOrientationChange}>
                  landscape
                </div>
                <div className={cx({ active_orientation: selectedOrientation === 'portrait' })} onClick={this.handleOrientationChange}>
                  portrait
                </div>
                <style>
                  
                </style>
              </div>
            </div>
          </div>
          <div className={styles.custom_common_container}>
            use custom header
            <label className={cx( 'custom_common', { custom_checked: selectedCustomHeader })} onClick={this.handleCustomHeaderChange}></label>
          </div>
          <div className={styles.custom_common_container}>
            use custom footer
            <label className={cx('custom_common', { custom_checked: selectedCustomFooter })} onClick={this.handleCustomFooterChange}></label>
          </div>
        </div>
        <div className={styles.filter}>
          print filter
          <ul className={styles.filter_ul}>
            {
              Object.values(FILTERS_CONFIG).map((filter) => {
                return (
                  <li key={filter} className={styles.filter_li}>
                    <label onClick={() => setPrintVisibilityFilter(filter)} className={cx({ checked_filter: filter === activeFilter })}>
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
