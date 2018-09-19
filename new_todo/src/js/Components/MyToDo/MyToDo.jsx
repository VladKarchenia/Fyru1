import React, { Component } from 'react'
import styles from './MyToDo.module.scss'

class MyToDo extends Component {
  state={
    editMode: true,
    inputListValue: 'My Todo List Name'
  }

  componentDidMount() {
    console.log('componentDidMount')
    document.addEventListener('click', this.changeListName, true)
    // document.addEventListener('click', this.handleOutsideClick, true)
    // document.addEventListener('keydown', this.handleKeyPress, true)
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   document.removeEventListener('click', this.handleOutsideClick, true)
  //   // document.removeEventListener('keydown', this.handleKeyPress, true)
  // }

  changeListName = () => {
    const { editMode } = this.state
    this.setState({
      isCompleted: !editMode,
    })
  }

  handleChange = (e) => this.setState({
    inputListValue: e.target.value
  })

  // handleOutsideClick = (e) => {
  //   const { target } = e
  //   if (!this.node.contains(target)) {
  //     console.log('handleOutsideClick')
  //     this.changeListName
  //     document.removeEventListener('click', this.handleOutsideClick, true);
  //   }
  // }

  saveToDo = () => {
    console.log('Save this list')
  }

  render() {
    const { editMode, inputListValue } = this.state
    if (editMode) {
      return (
        <div className={styles.myToDo}>
          <h2 className={styles.toDoName}><span className={styles.newNameSpan} onClick={this.changeListName}>{inputListValue}</span></h2>
          <button onClick={this.saveToDo} className={styles.saveBtn}>Save This List</button>
        </div>
      )
    } else {
      return (
        <div className={styles.myToDo}>
          <input ref={node => (this.node = node)} value={inputListValue} onChange={this.handleChange} autoFocus className={styles.input} />
          <button onClick={this.saveToDo} className={styles.saveBtn}>Save This List</button>
        </div>
      )
    }
  }
}

export default MyToDo
