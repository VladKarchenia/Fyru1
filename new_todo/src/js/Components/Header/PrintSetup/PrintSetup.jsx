import React from 'react'
import styles from './PrintSetup.module.scss'
import TodoItem from '../../TodoList/apps/TodoItem/TodoItem.jsx'

const PrintSetup = ({ listName, items }) => {
  return (
    <div className={styles.print}>
      <div className={styles.print_head}>
        <div className={styles.print_listname}>
          <span className={styles.print_span_listname}>{listName}</span>
        </div>
        <div className={styles.print_head_buttons}>
          <button className={styles.calcel_btn}>cancel</button>
          <button className={styles.print_btn}>print</button>
        </div>
      </div>
      <div className={styles.print_body}>
        <div className={styles.print_mainscreen}>
          <div className={styles.mytodolist}>
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
        </div>
        <div className={styles.print_rightcolumn}>
          <div className={styles.print_orientation}>
            <span>page orientation</span>
            <div>
              <div>
                <input type="radio" name="orientation_type" id="landscape" value="landscape" />
                <label>landscape</label>
              </div>
              <div>
                <input type="radio" name="orientation_type" id="portrait" value="portrait" />
                <label>portrait</label>
              </div>
            </div>
          </div>
          <div className={styles.custom_header}>
            <span>use custom header</span>
          </div>
          <div className={styles.custom_footer}>
            <span>use custom footer</span>
          </div>
          <div className={styles.print_filter}>
            <span>print filter</span>
            <ul>
              <li key="">
                <input type="radio" name="print_filter" />
                <label>filter</label>
              </li>
            </ul>
          </div>
          {/* <div className={styles.print_zoom}>
            <button className={styles.print_zoom_plus}></button>
            <button className={styles.print_zoom_minus}></button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default PrintSetup
