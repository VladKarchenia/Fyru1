import React from 'react'

import TodoItem from '../../../../../../TodoList/apps/TodoItem/TodoItem.jsx'
import { filterItems } from '../../../../../../../utils'
import styles from './Preview.module.scss'

const Preview = ({ items, activeFilter, useCustomHeader, useCustomFooter, customHeader, customFooter }) => (
  <div className={styles.body}>
    <div className={styles.preview}>
      {useCustomHeader && customHeader !== ''
        ? <div className={styles.preview_header}>{customHeader}</div>
        : null
      }
      <ul className={styles.todoListStyle}>
        {
          filterItems(items, activeFilter).map((props, i) => <TodoItem key={i} {...props} />)
        }
      </ul>
      {useCustomFooter && customFooter !== ''
        ? <div className={styles.preview_footer}>{customFooter}</div>
        : null
      }
    </div>
  </div>
)

export default Preview
