import React, { PureComponent } from 'react'
import classNames from 'classnames/bind'

import { FILTERS_CONFIG } from '../../../../../../TodoList/apps/SortComponent/constant_filter'
import styles from './Options.module.scss'

const cx = classNames.bind(styles)

class Options extends PureComponent {
  render () {
    const {
      activeFilter,
      setPrintVisibilityFilter,
      orientation,
      setOrientation,
      useCustomHeader,
      useCustomFooter,
      handleCustomHeaderChange,
      handleCustomFooterChange
    } = this.props
    return (
      <div className={styles.options}>
        <div>
          <div>
            <span className={styles.orientation_titleSpan}>layout</span>
            <div className={styles.orientation}>
              <span>page orientation</span>
              <div className={styles.orientation_types}>
                <div className={cx({ active_orientation: orientation === 'landscape' })} onClick={() => setOrientation('landscape')}>
                  landscape
                </div>
                <div className={cx({ active_orientation: orientation === 'portrait' })} onClick={() => setOrientation('portrait')}>
                  portrait
                </div>
                <div className={styles.media_print} dangerouslySetInnerHTML={{__html: `<style media="print">@page {size: ${orientation}}</style>`}} />
              </div>
            </div>
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
        <div className={styles.custom_common_container}>
          use custom header
          <label className={cx( 'custom_common', { custom_checked: useCustomHeader })} onClick={handleCustomHeaderChange}></label>
        </div>
        <div className={styles.custom_common_container}>
          use custom footer
          <label className={cx('custom_common', { custom_checked: useCustomFooter })} onClick={handleCustomFooterChange}></label>
        </div>
      </div>
    )
  }
}

export default Options
