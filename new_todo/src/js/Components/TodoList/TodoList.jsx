import React, { PureComponent } from 'react'
import TodoItem from './apps/TodoItem/TodoItem.jsx'
import SortComponent from './apps/SortComponent/SortComponent.jsx'
import styles from './TodoList.module.scss'
import classNames from 'classnames/bind'
import { filterItems } from './helper.js'
import { FILTERS_CONFIG } from './apps/SortComponent/constants.js'

const cx = classNames.bind(styles)

class TodoList extends PureComponent {
  state = {
    activeFilter: FILTERS_CONFIG.all,
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

  changeFilter = type => {
    this.setState({ activeFilter: type })
  }

  render() {
    const { activeFilter, inputValue } = this.state
    const { items, updateItemByKey, onDelete } = this.props
    const itemsToRender = filterItems(items, activeFilter)

    return (
      <div>
        <div className={styles.form}>
          <input ref={this.inputRef} placeholder='Write your next task here...' className={styles.input} value={inputValue} onChange={this.handleChange}/>
          <button onClick={this.addItem} className={cx('addBtn', { inactiveBtn: !inputValue }, { activeBtn: inputValue })}>ADD</button>
        </div>
        <SortComponent changeFilter={this.changeFilter} activeFilter={activeFilter} />
        <ul className={styles.todoListStyle}>
        {
          itemsToRender.map(({ id, value, isPinned, isCompleted, dueDate }) => (
            <TodoItem
              onDelete={onDelete}
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
