import React, { PureComponent } from 'react'

import Header from './apps/printOptions/Header/Header.jsx'
import Preview from './apps/printOptions/Preview/Preview.jsx'
import Options from './apps/printOptions/Options/Options.jsx'
import styles from './PrintSetup.module.scss'

class PrintSetup extends PureComponent {
  state = {
    // isPrintMode: false,
    // options: {},
    filter: this.props.filter,
  }

  render() {
    const { filter } = this.state
    const { items, listName, printEnd, setVisibilityFilter } = this.props
    return (
      <div className={styles.root}>
        <Header key='Header' listName={listName} printEnd={printEnd} />
        <div className={styles.mainContainer}>
          <Preview key='Preview' className={styles.preview} items={items} />
          <Options key='Options' className={styles.options} items={items} setVisibilityFilter={setVisibilityFilter} filter={filter} />
        </div>
      </div>
    )
  }
}

export default PrintSetup
