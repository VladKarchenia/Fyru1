import React, { PureComponent } from 'react'
import TodoItem from './apps/TodoItem/TodoItem.jsx'
import SortComponent from './apps/SortComponent/SortComponent.jsx'
import styles from './TodoList.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class TodoList extends PureComponent {
  state = {
    inputValue: '',
  }

  componentDidMount() {
    document.addEventListener('keyup', this.enterAddTodo)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.enterAddTodo)
  }

  addItem = () => {
    if (this.state.inputValue !== '') {
      this.props.addItem(this.state.inputValue)
    }
    this.setState({ inputValue: '' })
  }

  enterAddTodo = (e) => {
    if (e.key === 'Enter' && this.inputRef.current === document.activeElement) {
      this.addItem()
    }
  }

  inputRef = React.createRef()

  handleChange = (e) => this.setState({
    inputValue: e.target.value
  })

  render() {
    const { inputValue } = this.state
    const { items, updateItemByKey, deleteItem } = this.props

    return (
      <div className={styles.listContent}>
        <div className={styles.form}>
          <input ref={this.inputRef} placeholder='Write your next task here...' className={styles.input} value={inputValue} onChange={this.handleChange}/>
          <button onClick={this.addItem} className={cx('addBtn', { inactiveBtn: !inputValue }, { activeBtn: inputValue })}>ADD</button>
        </div>
        <SortComponent />
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
  }
}

export default TodoList
