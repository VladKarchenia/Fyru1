import React, { Component } from 'react'
import TodoItem from './apps/TodoItem.jsx'
import SortContainer from '../SortContainer/SortContainer.jsx'

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
    return (
      <div>
        <div className='form'>
          <input value={this.state.inputValue} onChange={this.handleChange} placeholder='Write your next task here...' className='input'/>
          <button onClick={this.handleClick} className='addBtn'>ADD</button>
        </div>
        <SortContainer />
        <ul className='todoListStyle'>
          {
            this.state.list.map((item, index) => {
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
