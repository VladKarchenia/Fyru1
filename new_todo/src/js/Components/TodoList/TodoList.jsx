import React from 'react'

import TodoItem from './apps/TodoItem/TodoItem.jsx'
import styles from './TodoList.module.scss'

const TodoList = ({ items, updateItemByKey, deleteItem }) => (
  <div className={styles.listContent}>
    <ul className={styles.todoListStyle}>
      {
        items.map(({ id, value, isPinned, isCompleted, dueDate }) => (
          <TodoItem
            deleteItem={deleteItem}
            updateItemByKey={updateItemByKey}
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
)

export default TodoList
