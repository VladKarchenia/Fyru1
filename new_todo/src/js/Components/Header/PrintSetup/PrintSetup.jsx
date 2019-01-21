import React from 'react'
// import classNames from 'classnames/bind'

import TodoItem from '../../TodoList/apps/TodoItem/TodoItem.jsx'
import { FILTERS_CONFIG } from '../../TodoList/apps/SortComponent/constant_filter'
import styles from './PrintSetup.module.scss'

// const cx = classNames.bind(styles)

const PrintSetup = ({ listName, items, printEnd, setVisibilityFilter }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.listname}>
          <span className={styles.span_listname}>{listName}</span>
        </div>
        <div className={styles.header_buttons}>
          <button className={styles.calcel_btn} onClick={printEnd}>cancel</button>
          <button className={styles.print_btn}>print</button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.preview}>
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
        <div className={styles.options}>
          <div className={styles.layout}>
            <div className={styles.orientation_container}>
              <span className={styles.orientation_titleSpan}>layout</span>
              <div className={styles.orientation}>
                <span>page orientation</span>
                <div className={styles.orientation_types}>
                  <div>
                    <input type="radio" className={styles.orientation_types_input} defaultChecked />
                    <label className={styles.orientation_label}>landscape</label>
                  </div>
                  <div>
                    <input type="radio" className={styles.orientation_types_input} />
                    <label className={styles.orientation_label}>portrait</label>
                  </div>
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
                  <li className={styles.filter_li} key={filter}>
                    <input type="radio" className={styles.filter_radio} onClick={() => setVisibilityFilter(filter)} />
                    <label className={styles.filterLabel}>{filter}</label>
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
