import React, { PureComponent } from 'react'

import PrintSetup from './apps/PrintSetup'
import styles from './Header.module.scss'

class Header extends PureComponent {
  state = {
    printMode: false,
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('keydown', this.printPreventDefault)
  }

  printPreventDefault = (e) => {
    if (e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80)) {
      e.preventDefault()
    }
  }

  handleKeyUp = (e) => {
    if (e.ctrlKey && e.keyCode === 80) {
      this.setState({ printMode: true })
    }
    else if (e.keyCode === 27) {
      this.setState({ printMode: false })
    }
  }

  printStart = () => this.setState({ printMode: true })
  
  printEnd = () => this.setState({ printMode: false })

  clearList = () => {
    const { clearTodos, clearListName, changeListName } = this.props
    clearTodos()
    clearListName()
    changeListName('')
  }
  
  render() {
    const { printMode } = this.state
    return (
      <div className={styles.root}>
        {printMode
          ? <PrintSetup printEnd={this.printEnd} />
          : <div className={styles.header}>
            <div className={styles.clearList} onClick={this.clearList}>
              <button className={styles.clearIcon}></button>
              <a className={styles.text}>Clear List</a>
            </div>
            <div className={styles.printList} onClick={this.printStart}>
              <button className={styles.printIcon}></button>
              <a className={styles.text}>Print</a>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Header



// const Header = ({  }) => (
//   <div className={styles.clearList} onClick={this.clearList}></div>
// )