import React from 'react'

import TodoItem from '../../../../../../TodoList/apps/TodoItem/TodoItem.jsx'
import { filterItems } from '../../../../../../TodoList/helper'
import styles from './Preview.module.scss'

const Preview = ({ items, activeFilter, useCustomHeader, useCustomFooter, customHeader, customFooter }) => (
  <div className={styles.body}>
    <div className={styles.preview}>
      {useCustomHeader
        ? <div className={styles.preview_header}>{customHeader}</div>
        : null
      }
      <ul className={styles.todoListStyle}>
        {
          filterItems(Object.values(items).reverse(), activeFilter).map((props, i) => <TodoItem key={i} {...props} />)
        }
      </ul>
      {useCustomFooter
        ? <div className={styles.preview_footer}>{customFooter}</div>
        : null
      }
    </div>
  </div>
)

export default Preview
