import React, { Component } from 'react'
import styles from './ListManagement.module.scss'

class ToDoListManagement extends Component {
  state = {
    editMode: false,
    listName: 'My Todo List'
  }

  changeListName = () => {
    this.setState({ editMode: true,
      cachedListName: this.state.listName })
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('click', this.handleOutsideClick)
  }

  onChange = (e) => this.setState({
    listName: e.target.value
  })

  exitEditMode = () => {
    this.setState({ editMode: false })
    document.removeEventListener('click', this.handleOutsideClick)
    document.removeEventListener('click', this.handleKeyUp)
  }

  handleOutsideClick = (e) => {
    if (!this.inputRef.contains(e.target)) {
      this.exitEditMode()
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.keyCode === 13
      ? this.setState({ cachedListName: this.state.listName })
      : this.setState({ listName: this.state.cachedListName })
      this.exitEditMode()
    }
  }

  render() {
    const { editMode, listName } = this.state

    return (
      <div className={styles.root}>
        {!editMode
          ? <h2 className={styles.toDoName}>
              <span className={styles.newNameSpan} onClick={this.changeListName}>{listName || 'Default'}</span>
            </h2>
          : <input ref={ref => { this.inputRef = ref }} value={listName} onChange={this.onChange} autoFocus className={styles.input} />
        }
        <button className={styles.saveBtn}>Save This List</button>
      </div>
    )
  }
}

export default ToDoListManagement
