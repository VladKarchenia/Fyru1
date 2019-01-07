import React, { PureComponent } from 'react'
import styles from './ListManagement.module.scss'

class ListManagement extends PureComponent {
  static getDerivedStateFromProps (nextProps, prevState) {
    const { listName } = nextProps
    const { cachedListName } = prevState
    if (listName !== cachedListName) {
      return {
        cachedListName: listName,
        inputValue: listName
      }
    }
    return null
  }

  state = {
    editMode: false,
    cachedListName: this.props.listName,
    inputValue: this.props.listName
  }

  updateListName = value => {
    const { listName, updateListName } = this.props
    if (value !== listName) {
      updateListName(value)
    }
  }

  changeListName = () => {
    this.setState({ editMode: true })
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('click', this.handleOutsideClick)
  }

  onChange = (e) => this.setState({
    inputValue: e.target.value
  })

  exitEditMode = () => {
    this.setState({ editMode: false })
    document.removeEventListener('click', this.handleOutsideClick)
    document.removeEventListener('click', this.handleKeyUp)
  }

  handleOutsideClick = (e) => {
    if (!this.inputRef.current.contains(e.target)) {
      const { inputValue } = this.state
      this.updateListName(inputValue)
      this.exitEditMode()
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      if (e.keyCode === 27) {
        const { listName } = this.props
        this.setState({ inputValue: listName })
      }
      const { inputValue } = this.state
      this.updateListName(inputValue)
      this.exitEditMode()
    }
  }

  inputRef = React.createRef()
  
  render() {
    const { editMode, inputValue } = this.state
    const { importList, exportList, listName } = this.props
    return (
      <div className={styles.root}>
        {!editMode
          ? <h2 className={styles.toDoName}>
              <span className={styles.newNameSpan} onClick={this.changeListName}>{listName || 'Default'}</span>
            </h2>
          : <input ref={this.inputRef} value={inputValue} onChange={this.onChange} autoFocus className={styles.input} />
        }
        <div className={styles.buttons}>
          <label className={styles.btnLabel}><input onInput={importList} className={styles.importInput} type="file" accept='.json' />Import List</label>
          <button className={styles.btn} onClick={exportList}>Export List</button>
        </div>
      </div>
    )
  }
}

export default ListManagement
