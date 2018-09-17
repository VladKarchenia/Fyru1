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
    })
  }

  render() {
    const { content } = this.props;
    const { isFixed, isCompleted } = this.state;
    return (
    <li className={cx('activeTask', {fixedTask:isFixed}, {completedTask:isCompleted})}>
        <div className='leftSide'>
          <span className='taskHandle'></span>
          <input type="checkbox" className='checkImg' id='checkImg' onClick={this.completedTask}/>
          <label htmlFor="checkImg" className='checkLabel'></label>
          <span className='taskText'>{content}</span>
          <span className='dueData'>No due data</span>
        </div>
        <ul className='actions'>
          <li className='star'><input type="text" id='star' className='starInp' /><label htmlFor="star" className='starLabel'><span className='starSpan' onClick={this.fixedTask}></span></label></li>
          <li className='tag'><span className='tagSpan'></span></li>
          <li className='delete'><span className='deleteSpan' onClick={this.delItem}></span></li>
        </ul>
      </li>
    )
  }
}

export default TodoItem;
