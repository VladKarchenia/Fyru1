import React, { PureComponent } from 'react'
import styles from './Header.module.scss'
import PrintSetup from './PrintSetup'

class Header extends PureComponent {
  state = {
    printMode: true,
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('keydown', this.printStopPropagation)
  }

  printStopPropagation = (e) => {
    if (e.keyCode === 80 && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
      event.preventDefault()
      if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation()
      } else {
        e.stopPropagation()
      }
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

  render() {
    const { printMode } = this.state
    return (
      <div>
        {printMode
          ? <PrintSetup printEnd={this.printEnd} />
          : <div className={styles.header} onClick={this.printStart}>
            <button className={styles.printIcon}></button>
            <a className={styles.a}>Log in</a>
            <a className={styles.newList}>New List</a>
          </div>
        }
      </div>
    )
  }
}

export default Header
