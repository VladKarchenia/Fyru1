import React, { Component } from 'react'
import TodoItem from './apps/TodoItem/TodoItem.jsx'
import SortComponent from './apps/SortComponent/SortComponent.jsx'
import styles from './InputComponent.module.scss'
import _omit from 'lodash/omit'
import _set from 'lodash/set'
import { filterItems } from './helper.js'
import { FILTERS_CONFIG } from './apps/SortComponent/constants.js'

class TodoList extends Component {
  state = {
    items: {},
    activeFilter: FILTERS_CONFIG.all
  }

  componentDidMount() {
    document.addEventListener('keyup', this.enterAddTodo)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.enterAddTodo)
  }

  addItem = () => {
    const { items } = this.state
    const { value } = this.inputRef
    if (value) {
      const id = Date.now()
      this.setState({
        items: {
          ...items,
          [id]: {
            id,
            value,
            isPinned: false,
            isCompleted: false
          }
        }
      })
    }
    this.inputRef.value = ''
  }

  enterAddTodo = (e) => {
    if (e.key === 'Enter' && this.inputRef === document.activeElement) {
      this.addItem()
    }
  }

  handleChange = (e) => this.setState({
    inputValue: e.target.value
  })

  onDelete = id => {
    const { items } = this.state
      this.setState({ items: _omit(items, id) })
  }

  updateItemByKey = (id, key, value) => {
    const { items } = this.state
    this.setState({ items: _set(items, [id, key] , value) })
  }

  changeFilter = type => {
    this.setState({ activeFilter: type })
  }

  render() {
    const { items, activeFilter } = this.state
    const itemsToRender = filterItems(items, activeFilter)

    return (
      <div>
        <div className={styles.form}>
          <input ref={ref => { this.inputRef = ref }} placeholder='Write your next task here...' className={styles.input} />
          <button onClick={this.addItem} className={styles.addBtn}>ADD</button>
        </div>
        <SortComponent changeFilter={this.changeFilter} activeFilter={activeFilter} />
        <ul className={styles.todoListStyle}>
        {
          itemsToRender.map(({ id, value, isPinned, isCompleted }) => (
            <TodoItem
              onDelete={this.onDelete}
              updateItemByKey={this.updateItemByKey}
              key={id}
              isPinned={isPinned}
              isCompleted={isCompleted}
              value={value}
              id={id}
            />
          ))
        }
        </ul>
      </div>
    )
  }
}

export default TodoList
