import React, { PureComponent } from 'react'
import styles from './Header.module.scss'
import PrintSetup from './PrintSetup'

class Header extends PureComponent {
  state = {
    printMode: false,
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('keydown', function(e) {
      if (e.keyCode === 80 && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
        event.preventDefault()
        if (e.stopImmediatePropagation) {
          e.stopImmediatePropagation()
        } else {
          e.stopPropagation()
        }
        return
      }
    }, true)
  }

  handleKeyUp = (e) => {
    if (e.ctrlKey && e.keyCode === 80) {
      this.setState({ printMode: true })
    }
    else if (e.keyCode === 27) {
      this.setState({ printMode: false })
    }
  }

  render() {
    const { printMode } = this.state
    return (
      <div>
        {printMode
          ? <PrintSetup />
          : <div className={styles.header}>
            <a className={styles.a}>Log in</a>
            <a className={styles.newList}>New List</a>
          </div>
        }
      </div>
    )
  }
}

export default Header
