import React, { PureComponent } from 'react'
import TodoItem from './apps/TodoItem/TodoItem.jsx'
import SortComponent from './apps/SortComponent/SortComponent.jsx'
import styles from './InputComponent.module.scss'
// import _omit from 'lodash/omit'
// import _set from 'lodash/set'
import { filterItems } from './helper.js'
import { FILTERS_CONFIG } from './apps/SortComponent/constants.js'

class TodoList extends PureComponent {
  state = {
    activeFilter: FILTERS_CONFIG.all
  }

  componentDidMount() {
    document.addEventListener('keyup', this.enterAddTodo)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.enterAddTodo)
  }

  addItem = () => {
    const { value } = this.inputRef.current
    if (value) {
      this.props.addItem(value)
    }
    this.inputRef.current.value = ''
  }

  enterAddTodo = (e) => {
    if (e.key === 'Enter' && this.inputRef.current === document.activeElement) {
      this.addItem()
    }
  }

  handleChange = (e) => this.setState({
    inputValue: e.target.value
  })

  // onDelete = id => {
  //   const { items } = this.state
  //     this.setState({ items: _omit(items, id) })
  // }

  // updateItemByKey = (id, key, value) => {
  //   const { items } = this.state
  //   this.setState({ items: _set(items, [id, key] , value) })
  // }

  changeFilter = type => {
    this.setState({ activeFilter: type })
  }

  inputRef = React.createRef()

  render() {
    const { activeFilter } = this.state
    const { items } = this.props
    const itemsToRender = filterItems(items, activeFilter)

    return (
      <div>
        <div className={styles.form}>
          <input ref={this.inputRef} placeholder='Write your next task here...' className={styles.input} />
          <button onClick={this.addItem} className={styles.addBtn}>ADD</button>
        </div>
        <SortComponent changeFilter={this.changeFilter} activeFilter={activeFilter} />
        <ul className={styles.todoListStyle}>
        {
          itemsToRender.map(({ id, value, isPinned, isCompleted }) => (
            <TodoItem
              onDelete={this.props.onDelete}
              updateItemByKey={this.props.updateItemByKey}
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
