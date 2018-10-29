import React, {PureComponent} from 'react';
import styles from './TodoItem.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import DatePicker from 'react-datepicker'
import moment from 'moment'
import './React-datepicker-cssmodules.scss'
import { NO_DUE_DATE } from '../../helper.js'
console.log(NO_DUE_DATE)
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
    console.log(date)
    const { id, updateItemByKey } = this.props
    updateItemByKey(id, 'dueDate', date.format('YYYY-MM-DD'))
  }

  render() {
    const { value, id, isPinned, isCompleted, onDelete, dueDate } = this.props;
    const selectedDate = (dueDate !== NO_DUE_DATE) ? dueDate : moment();
    console.log(selectedDate)
    console.log(dueDate)
    return (
     <li className={cx('activeTask', { pinnedTask: isPinned }, { completedTask: isCompleted })}>
        <div className={styles.leftSide}>
          <span className={styles.taskHandle} ></span>
          <input type="checkbox" className={styles.checkImg} />
          <label className={styles.checkLabel} onClick={this.toggleCompleted}></label>
          <span className={styles.taskText}>{value}</span>
          <span className={styles.dueData}>
            <DatePicker
              selected={selectedDate}
              onChange={this.handleChange}
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

export default TodoItem;
