import React from 'react'

import TodoItem from '../../../../../../TodoList/apps/TodoItem/TodoItem.jsx'
import { filterItems } from '../../../../../../TodoList/helper'
import styles from './Preview.module.scss'

const Preview = ({ items, activeFilter, useCustomHeader, useCustomFooter, customHeader, customFooter }) => (
  <div className={styles.body}>
    <div className={styles.preview}>
      {useCustomHeader
        ? <span className={styles.header_span}>{customHeader}</span>
        : null
      }
      <ul className={styles.todoListStyle}>
        {
          filterItems(items, activeFilter).map((props, i) => <TodoItem key={i} {...props} />)
        }
      </ul>
      {useCustomFooter
        ? <span className={styles.footer_span}>{customFooter}</span>
        : null
      }
    </div>
  </div>
)

export default Preview
