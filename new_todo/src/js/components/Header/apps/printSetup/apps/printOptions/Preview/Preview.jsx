import React, { PureComponent } from 'react'

import TodoItem from '../../../../../../TodoList/apps/TodoItem/TodoItem.jsx'
import styles from './Preview.module.scss'

class Preview extends PureComponent {
  render () {
    const { items } = this.props
    return (
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
      </div>
    )
  }
}

export default Preview
