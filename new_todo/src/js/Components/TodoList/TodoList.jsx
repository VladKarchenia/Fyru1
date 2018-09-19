import React, { Component } from 'react'
import TodoItem from './apps/TodoItem.jsx'
import SortContainer from '../SortContainer/SortContainer.jsx'
import styles from './InputContainer.module.scss'

class TodoList extends Component {
  state = {
    list: [],
    inputValue: ''
  }

  handleClick = () => this.setState({
    list: [this.state.inputValue, ...this.state.list],
    inputValue: ''
  })

  handleChange = (e) => this.setState({
    inputValue: e.target.value
  })

  delItem = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }


  render() {
    const { list, inputValue } = this.state
    return (
      <div>
        <div className={styles.form}>
          <input value={inputValue} onChange={this.handleChange} placeholder='Write your next task here...' className={styles.input} />
          <button onClick={this.handleClick} className={styles.addBtn}>ADD</button>
        </div>
        <SortContainer />
        <ul className={styles.todoListStyle}>
          {
            list.map((item, index) => {
              return (
                <TodoItem
                  handleDel={this.delItem}
                  key={index}
                  content={item}
                  index={index}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList
