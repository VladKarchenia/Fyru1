import React, {PureComponent} from 'react';
import styles from './TodoItem.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

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

  render() {
    const { value, id, isPinned, isCompleted } = this.props;
    return (
     <li className={ cx('activeTask', { pinnedTask:isPinned }, { completedTask:isCompleted }) }>
        <div className={styles.leftSide}>
          <span className={styles.taskHandle} ></span>
          <input type="checkbox" className={styles.checkImg} id='checkImg' />
          <label htmlFor="checkImg" className={styles.checkLabel} onClick={this.toggleCompleted}></label>
          <span className={styles.taskText}>{value}</span>
          <span className={styles.dueData}>No due data</span>
        </div>
        <ul className={styles.actions}>
          <li className={styles.star}><input type="text" id='star' className={styles.starInp} /><label htmlFor="star" className={styles.starLabel}><span className={styles.starSpan} onClick={this.togglePinned}></span></label></li>
          <li className={styles.tag}><span className={styles.tagSpan}></span></li>
          <li className={styles.delete}><span className={styles.deleteSpan} onClick={() => this.props.onDelete(id)}></span></li>
        </ul>
      </li>
    )
  }
}

export default TodoItem;
