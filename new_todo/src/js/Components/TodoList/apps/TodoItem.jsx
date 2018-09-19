import React, {Component} from 'react';
import styles from './TasksList.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class TodoItem extends Component {
  state = {
    isFixed: false,
    isCompleted: false
  }

  delItem = () => {
    const {handleDel, index} = this.props;
    handleDel(index);
  }

  fixedTask = () => {
    const { isFixed } = this.state
    this.setState({
      isFixed: !isFixed,
    })
  }

  completedTask = () => {
    const { isCompleted } = this.state
    this.setState({
      isCompleted: !isCompleted,
      isFixed: false
    })
  }

  render() {
    const { content } = this.props;
    const { isFixed, isCompleted } = this.state;
    return (
    <li className={cx('activeTask', {fixedTask:isFixed}, {completedTask:isCompleted})}>
        <div className={styles.leftSide}>
          <span className={styles.taskHandle}></span>
          <input type="checkbox" className={styles.checkImg} id='checkImg' />
          <label htmlFor="checkImg" className={styles.checkLabel} onClick={this.completedTask}></label>
          <span className={styles.taskText}>{content}</span>
          <span className={styles.dueData}>No due data</span>
        </div>
        <ul className={styles.actions}>
          <li className={styles.star}><input type="text" id='star' className={styles.starInp} /><label htmlFor="star" className={styles.starLabel}><span className={styles.starSpan} onClick={this.fixedTask}></span></label></li>
          <li className={styles.tag}><span className={styles.tagSpan}></span></li>
          <li className={styles.delete}><span className={styles.deleteSpan} onClick={this.delItem}></span></li>
        </ul>
      </li>
    )
  }
}

export default TodoItem;
