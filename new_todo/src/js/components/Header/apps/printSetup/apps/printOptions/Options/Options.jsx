import React from 'react'
import classNames from 'classnames/bind'

import { FILTERS_CONFIG } from '../../../../../../SortComponent/constant_filter'
import styles from './Options.module.scss'

const cx = classNames.bind(styles)

const Options = ({
  options,
  setFilter,
  setOrientation,
  toggleCustomHeader,
  toggleCustomFooter,
  onChangeHeader,
  onChangeFooter
 }) => (
  <div className={styles.options}>
    <div>
      <div>
        <span className={styles.orientation_titleSpan}>layout</span>
        <div className={styles.orientation}>
          <span>page orientation</span>
          <div className={styles.orientation_types}>
            <div className={cx({ active_orientation: options.orientation === 'landscape' })} onClick={() => setOrientation('landscape')}>
              landscape
            </div>
            <div className={cx({ active_orientation: options.orientation === 'portrait' })} onClick={() => setOrientation('portrait')}>
              portrait
            </div>
            <div className={styles.media_print} dangerouslySetInnerHTML={{__html: `<style media="print">@page {size: ${options.orientation}}</style>`}} />
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
                <label onClick={() => setFilter(filter)} className={cx({ checked_filter: filter === options.activeFilter })}>
                  {filter}
                </label>
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className={styles.custom_common_container}>
      <div>
        use custom header
        <label className={cx( 'custom_common', { custom_checked: options.useCustomHeader })} onClick={toggleCustomHeader}></label>
      </div>
      {options.useCustomHeader
        ? <input className={styles.custom_input} onChange={onChangeHeader} value={options.customHeader} autoFocus />
        : null
      }
    </div>
    <div className={styles.custom_common_container}>
      <div>
        use custom footer
        <label className={cx('custom_common', { custom_checked: options.useCustomFooter })} onClick={toggleCustomFooter}></label>
      </div>
      {options.useCustomFooter
        ? <input className={styles.custom_input} onChange={onChangeFooter} value={options.customFooter} autoFocus />
        : null
      }
    </div>
  </div>
)

export default Options
