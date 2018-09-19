import React, { Component } from 'react'
import styles from './MyToDo.module.scss'

class MyToDo extends Component {
  state={
    editMode: false,
    inputListValue: 'My Todo List Name'
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, true)
  }

  changeListName = () => {
    this.setState({
      editMode: true
    })
    document.addEventListener('click', this.handleOutsideClick, true)
  }

  handleChange = (e) => this.setState({
    inputListValue: e.target.value
  })

  handleOutsideClick = (e) => {
    const { target } = e
    if (!this.node.contains(target)) {
      this.setState({
        editMode: false
      })
      document.removeEventListener('click', this.handleOutsideClick, true)
      document.removeEventListener('click', this.handleKeyPress, true)
    }
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 27 || e.key === 'Enter') {
      this.setState({
        editMode: false
      })
      document.removeEventListener('click', this.handleOutsideClick, true)
      document.removeEventListener('click', this.handleKeyPress, true)
    }
  }

  saveToDo = () => {
    console.log('Save this list')
  }

  render() {
    const { editMode, inputListValue } = this.state
    return (
      <div className={styles.myToDo}>
        {!editMode ? <h2 className={styles.toDoName}><span className={styles.newNameSpan} onClick={this.changeListName}>{inputListValue || '_'}</span></h2> : <input ref={node => (this.node = node)} value={inputListValue || ''} onChange={this.handleChange} autoFocus className={styles.input} />}
        <button onClick={this.saveToDo} className={styles.saveBtn}>Save This List</button>
      </div>
    )
  }
}

export default MyToDo
