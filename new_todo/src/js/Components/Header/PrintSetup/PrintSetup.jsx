import React from 'react'
import styles from './PrintSetup.module.scss'
import TodoItem from '../../TodoList/apps/TodoItem/TodoItem.jsx'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
import { FILTERS_CONFIG } from '../../../Components/TodoList/apps/SortComponent/constants'

const PrintSetup = ({ listName, items, printEnd, setVisibilityFilter, activeFilter }) => {
  return (
    <div className={styles.print}>
      <div className={styles.print_head}>
        <div className={styles.print_listname}>
          <span className={styles.print_span_listname}>{listName}</span>
        </div>
        <div className={styles.print_head_buttons}>
          <button className={styles.calcel_btn} onClick={printEnd}>cancel</button>
          <button className={styles.print_btn}>print</button>
        </div>
      </div>
      <div className={styles.print_body}>
        <div className={styles.print_mainscreen}>
          <ul className={styles.todoListStyle}>
            {
              items.map(({ id, value, isPinned, isCompleted, dueDate }) => (
                <TodoItem
                  key={id}
                  isPinned={isPinned}
                  isCompleted={isCompleted}
                  value={value}
                  id={id}
                  dueDate={dueDate}
                />
              ))
            }
          </ul>
        </div>
        <div className={styles.print_rightcolumn}>
          <div className={styles.print_layout}>
            <div className={styles.print_orientation_container}>
              <span className={styles.print_orientation_titleSpan}>layout</span>
              <div className={styles.print_orientation}>
                <span>page orientation</span>
                <div className={styles.print_orientation_types}>
                  <label className={styles.print_orientation_label}>landscape</label>
                  <label className={styles.print_orientation_label}>portrait</label>
                </div>
              </div>
            </div>
            <div className={styles.custom_common}>
              <span>use custom header</span>
              <input type="checkbox" />
            </div>
            <div className={styles.custom_common}>
              <span>use custom footer</span>
              <input type="checkbox" />
            </div>
          </div>
          <div className={styles.print_filter}>
            <span className={styles.print_orientation_titleSpan}>print filter</span>
            <ul className={styles.print_filter_ul}>
            {
              Object.values(FILTERS_CONFIG).map((filter) => {
                return (
                  <li className={styles.print_filter_li} key={filter}>
                    <input type="radio" className={styles.filter_radio} onClick={() => setVisibilityFilter(filter)} defaultChecked={filter === activeFilter} />
                    <label className={cx('print_filterLabel', { print_checkFilterLabel: filter })}>{filter}</label>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrintSetup
