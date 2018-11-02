import React, {PureComponent} from 'react'
import DatePicker from 'react-datepicker'
import styles from './TodoItem.module.scss'
import classNames from 'classnames/bind'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { NO_DUE_DATE } from '../../../App/App.jsx'

const cx = classNames.bind(styles)
const DATE_FORMAT = 'YYYY-MM-DD'

class TodoItem extends PureComponent {
  togglePinned = () => {
    const { id, isPinned, updateItemByKey } = this.props
    updateItemByKey(id, 'isPinned', !isPinned)
  }

  toggleCompleted = () => {
    const { id, isCompleted, updateItemByKey } = this.props
    updateItemByKey(id, 'isCompleted', !isCompleted)
    if (!isCompleted) {
      updateItemByKey(id, 'isPinned', false)
    }
  }

  handleChange = date => {
    const { id, updateItemByKey } = this.props
    updateItemByKey(id, 'dueDate', date ? date.format(DATE_FORMAT) : NO_DUE_DATE)
    setTimeout(() => document.activeElement.blur(), 0)
  }

  render() {
    const { value, id, isPinned, isCompleted, onDelete, dueDate } = this.props
    return (
     <li className={cx('activeTask', { pinnedTask: isPinned }, { completedTask: isCompleted })}>
        <div className={styles.leftSide}>
          <span className={styles.taskHandle} ></span>
          <input type="checkbox" className={styles.checkImg} />
          <label className={styles.checkLabel} onClick={this.toggleCompleted}></label>
          <span className={styles.taskText}>{value}</span>
          <DatePicker
            dateFormat={DATE_FORMAT}
            placeholderText={NO_DUE_DATE}
            clearButtonTitle={'Remove due date'}
            isClearable
            selected={dueDate !== NO_DUE_DATE ? moment(dueDate) : undefined}
            onChange={this.handleChange}
          />
        </div>
        <ul className={styles.actions}>
          <li className={styles.star}>
            <input type="text" className={styles.starInp} />
            <label className={styles.starLabel}>
              <span className={styles.starSpan} onClick={this.togglePinned}></span>
            </label>
          </li>
          <li className={styles.tag}>
            <span className={styles.tagSpan}></span>
          </li>
          <li className={styles.delete}>
            <span className={styles.deleteSpan} onClick={() => onDelete(id)}></span>
          </li>
        </ul>
      </li>
    )
  }
}

export default TodoItem
