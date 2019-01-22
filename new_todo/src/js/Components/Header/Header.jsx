import React, { PureComponent } from 'react'

import PrintSetup from './apps/PrintSetup'
import styles from './Header.module.scss'

class Header extends PureComponent {
  state = {
    printMode: true,
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

  render() {
    const { printMode } = this.state
    return (
      <div>
        {printMode
          ? <PrintSetup printEnd={this.printEnd} />
          : <div className={styles.header}>
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
