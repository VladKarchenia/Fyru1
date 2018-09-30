import React, { Component } from 'react'
import styles from './ToDoListManagement.module.scss'

class ToDoListManagement extends Component {
  state = {
    editMode: false,
    listName: 'My Todo List',
    defaultValue: 'My Todo List'
  }

  changeListName = () => {
    this.setState({ editMode: true })
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
    if (e.key === 'Enter') {
      this.setState({
        defaultValue: this.state.listName
      })
      this.exitEditMode()
    } else if (e.keyCode === 27) {
      this.setState({
        listName: this.state.defaultValue
      })
      this.exitEditMode()
    }
  }

  saveToDo = () => {
    console.log('Save this list')
  }

  render() {
    const { editMode, listName, defaultValue } = this.state

    return (
      <div className={styles.root}>
        {!editMode
          ? <h2 className={styles.toDoName}>
              <span className={styles.newNameSpan} onClick={this.changeListName}>{listName || defaultValue || 'Default'}</span>
            </h2>
          : <input ref={ref => { this.inputRef = ref }} value={listName} onChange={this.onChange} autoFocus className={styles.input} />
        }
        <button onClick={this.saveToDo} className={styles.saveBtn}>Save This List</button>
      </div>
    )
  }
}

export default ToDoListManagement
