import React from 'react'

import TodoItem from '../../../../../../TodoList/apps/TodoItem/TodoItem.jsx'
import { filterItems } from '../../../../../../TodoList/helper'
import styles from './Preview.module.scss'

const Preview = ({ items, activeFilter }) => (
  <div className={styles.body}>
    <div className={styles.preview}>
      <ul className={styles.todoListStyle}>
        {
          filterItems(items, activeFilter).map((props, i) => <TodoItem key={i} {...props} />)
        }
      </ul>
    </div>
  </div>
)

export default Preview
