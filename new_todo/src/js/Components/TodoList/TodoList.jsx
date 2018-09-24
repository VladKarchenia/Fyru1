import React, { Component } from 'react'
import TodoItem from './apps/TodoItem.jsx'
import SortContainer from '../SortContainer/SortContainer.jsx'
import styles from './InputContainer.module.scss'
import _omit from 'lodash/omit'
import _set from 'lodash/set'

class TodoList extends Component {
  state = {
    items: {}
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
            isFixed: false,
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

  // sort = () => {
  //   const { items } = this.state
  //   this.setState({
  //     items: items.reduce((acc, item) => {
  //         return items.isFixed === 'true'
  //         ? acc.concat(Object.assign({}, item))
  //         : acc;
  //     }, {})
  //   })
  // }

  render() {
    const { items } = this.state
    return (
      <div>
        <div className={styles.form}>
          <input ref={ref => { this.inputRef = ref }} placeholder='Write your next task here...' className={styles.input} />
          <button onClick={(id) => this.addItem(id)} className={styles.addBtn}>ADD</button>
        </div>
        <SortContainer />
        <ul className={styles.todoListStyle}>
        {
          Object.values(items).map(({id, value, isFixed, isCompleted}, index) => (
            <TodoItem
              onDelete={this.onDelete}
              updateItemByKey={this.updateItemByKey}
              key={index}
              isFixed={isFixed}
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
