import React, { PureComponent } from 'react'
import styles from './ListManagement.module.scss'

class ToDoListManagement extends PureComponent {
  state = {
    editMode: false,
    listName: this.props.listName
  }

  updateListName = value => {
    const { listName, updateListName } = this.props
    if (value !== listName) {
      updateListName(value)
    }
  }

  changeListName = () => {
    this.setState({
      editMode: true
    })
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
    if (!this.inputRef.current.contains(e.target)) {
      const { listName } = this.state
      this.updateListName(listName)
      this.exitEditMode()
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      if (e.keyCode === 27) {
        const { listName } = this.props
        this.setState({ listName })
      }
      const { listName } = this.state
      this.updateListName(listName)
      this.exitEditMode()
    }
  }

  inputRef = React.createRef()
  
  render() {
    const { editMode, listName } = this.state
    const { importList, exportList } = this.props
    return (
      <div className={styles.root}>
        {!editMode
          ? <h2 className={styles.toDoName}>
              <span className={styles.newNameSpan} onClick={this.changeListName}>{listName || 'Default'}</span>
            </h2>
          : <input ref={this.inputRef} value={listName} onChange={this.onChange} autoFocus className={styles.input} />
        }
        <div>
          <label className={styles.btn}><input onInput={importList} className={styles.importInput} type="file" accept='.json' />Import List</label>
          <button className={styles.btn} onClick={exportList}>Export List</button>
        </div>
      </div>
    )
  }
}

export default ToDoListManagement
