import React, { Component } from 'react'
import TodoItem from './apps/TodoItem.jsx'
import SortContainer from '../SortContainer/SortContainer.jsx'
import styles from './InputContainer.module.scss'
import _ from 'lodash'

class TodoList extends Component {
  state = {
    items: {},
    inputValue: ''
  }

  componentDidMount() {
    document.addEventListener('keydown', this.enterAddTodo, true)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.enterAddTodo, true)
  }

  addItem = (value, id = Date.now()) => {
    if (this.state.inputValue !== '' ) {
      this.setState({
        items: {
          ...this.state.items,
          [id]: {
            id,
            value,
            isFixed:false,
            isCompleted:false
          }
        },
        inputValue: ''
      })
    }
  }

  enterAddTodo = (e) => {
    if (e.key === 'Enter') {
      this.addItem()
    }
  }

  handleChange = (e) => this.setState({
    inputValue: e.target.value
  })

  onDelete = id => {
    const { items } = this.state
      this.setState({ items: _.omit(items, id) })
  }

  render() {
    const { items, inputValue } = this.state
    return (
      <div>
        <div className={styles.form}>
          <input value={inputValue} onChange={this.handleChange} placeholder='Write your next task here...' className={styles.input} />
          <button onClick={this.addItem} className={styles.addBtn}>ADD</button>
        </div>
        <SortContainer />
        <ul className={styles.todoListStyle}>
        {
          Object.values(items).map(({id, value, isFixed, isCompleted}, index) => (
            <TodoItem
              onDelete={this.onDelete}
              key={index}
              isFixed={false}
              isCompleted={false}
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
