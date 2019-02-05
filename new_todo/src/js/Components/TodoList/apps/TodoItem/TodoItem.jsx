import React, {PureComponent} from 'react'
import DatePicker from 'react-datepicker'
import classNames from 'classnames/bind'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import { ITEM_KEYS } from '../../../../constants/todoItem'
import { NO_DUE_DATE } from '../../../../constants/date'
import styles from './TodoItem.module.scss'

const DATE_FORMAT = 'YYYY-MM-DD'
const cx = classNames.bind(styles)

class TodoItem extends PureComponent {
  static getDerivedStateFromProps (nextProps, prevState) {
    const { value } = nextProps
    const { cachedTaskName } = prevState
    if (value !== cachedTaskName) {
      return {
        cachedTaskName: value,
        inputTaskValue: value
      }
    }
    return null
  }

  state = {
    editMode: false,
    inputTaskValue: this.props.value,
    cachedTaskName: this.props.value
  }

  togglePinned = () => {
    const { id, isPinned, updateItemByKey } = this.props
    updateItemByKey({
      id,
      key: ITEM_KEYS.isPinned,
      value: !isPinned,
    })
  }

  toggleCompleted = () => {
    const { id, isCompleted, updateItemByKey } = this.props
    updateItemByKey({
      id,
      key: ITEM_KEYS.isCompleted,
      value: !isCompleted,
    })
    if (!isCompleted) {
      updateItemByKey({
        id,
        key: ITEM_KEYS.isPinned,
        value: false,
      })
    }
  }

  handleChange = date => {
    const { id, updateItemByKey } = this.props
    updateItemByKey({
      id,
      key: ITEM_KEYS.dueDate,
      value: date ? date.format(DATE_FORMAT) : NO_DUE_DATE
    })
    setTimeout(() => document.activeElement.blur(), 0)
  }

  onKeyDown = (e) => e.preventDefault()

  updateTaskName = name => {
    const { value, id, updateItemByKey } = this.props
    if (name !== value) {
      updateItemByKey({
        id,
        key: ITEM_KEYS.value,
        value: name,
      })
    }
  }

  changeTaskName = () => {
    this.setState({ editMode: true })
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('click', this.handleOutsideClick)
  }

  onChange = (e) => this.setState({
    inputTaskValue: e.target.value
  })

  exitEditMode = () => {
    this.setState({ editMode: false })
    document.removeEventListener('click', this.handleOutsideClick)
    document.removeEventListener('click', this.handleKeyUp)
  }

  handleOutsideClick = (e) => {
    if (!this.inputRef.current.contains(e.target)) {
      const { inputTaskValue } = this.state
      this.updateTaskName(inputTaskValue)
      this.exitEditMode()
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      if (e.keyCode === 27) {
        const { value } = this.props
        this.setState({ inputTaskValue: value })
      }
      const { inputTaskValue } = this.state
      this.updateTaskName(inputTaskValue)
      this.exitEditMode()
    }
  }

  inputRef = React.createRef()

  render() {
    const { value, id, isPinned, isCompleted, deleteItem, dueDate } = this.props
    const { editMode, inputTaskValue } = this.state
    const noDueDate = dueDate === NO_DUE_DATE
    const today = moment(moment().format(DATE_FORMAT))
    const momentDueDate = noDueDate ? undefined : moment(dueDate)
    const isDeadline = momentDueDate && momentDueDate.diff(today, 'days') <= 1
    const isOverdue = momentDueDate && momentDueDate.diff(today, 'days') < 0

    return (
      <div className={styles.root}>
        <li className={cx('activeTask', { isPinned, isCompleted })}>
          <div className={styles.leftSide}>
            <span className={styles.taskHandle} ></span>
            <input type="checkbox" className={styles.checkImg} />
            <label className={styles.checkLabel} onClick={this.toggleCompleted}></label>
            {!editMode
              ? <span className={styles.taskText} onClick={this.changeTaskName}>{value || 'Default'}</span>
              : <input ref={this.inputRef} value={inputTaskValue} onChange={this.onChange} autoFocus className={styles.inputTask} />
            }
            <span className={cx('dueDate', { isDeadline, noDueDate, isOverdue })}>
              <DatePicker
                dateFormat={DATE_FORMAT}
                placeholderText={NO_DUE_DATE}
                clearButtonTitle={'Remove due date'}
                isClearable
                selected={momentDueDate}
                onChange={this.handleChange}
                minDate={today}
                onKeyDown={this.onKeyDown}
              />
            </span>
          </div>
          <ul className={styles.actions}>
            <li className={styles.star}>
              <input type="text" className={styles.starInp} />
              <label className={styles.starLabel}>
                <span className={styles.starSpan} onClick={this.togglePinned}></span>
              </label>
            </li>
            <li className={styles.delete}>
              <span className={styles.deleteSpan} onClick={() => deleteItem(id)}></span>
            </li>
          </ul>
        </li>
      </div>
    )
  }
}

export default TodoItem
