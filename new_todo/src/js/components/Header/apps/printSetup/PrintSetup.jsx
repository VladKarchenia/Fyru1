import React, { PureComponent } from 'react'

import Header from './apps/printOptions/Header/Header.jsx'
import Preview from './apps/printOptions/Preview/Preview.jsx'
import Options from './apps/printOptions/Options/Options.jsx'
import styles from './PrintSetup.module.scss'

class PrintSetup extends PureComponent {
  state = {
    orientation: 'portrait',
    activeFilter: this.props.activeFilter,
    useCustomHeader: false,
    useCustomFooter: false,
    customHeader: '',
    customFooter: '',
  }

  handleCustomHeaderChange = () => this.setState({
    useCustomHeader: !this.state.useCustomHeader
  })

  handleCustomFooterChange = () => this.setState({
    useCustomFooter: !this.state.useCustomFooter
  })

  setOrientation = (value) => this.setState({ orientation: value })

  setFilter = (filter) => this.setState({ activeFilter: filter })

  render() {
    const { orientation, activeFilter, useCustomHeader, useCustomFooter, customHeader, customFooter } = this.state
    const { items, listName, printEnd } = this.props
    return (
      <div className={styles.root}>
        <Header listName={listName} printEnd={printEnd} />
        <div className={styles.mainContainer}>
          <Preview items={items} activeFilter={activeFilter} />
          <Options
            setOrientation={this.setOrientation}
            setFilter={this.setFilter}
            activeFilter={activeFilter}
            orientation={orientation}
            useCustomHeader={useCustomHeader}
            useCustomFooter={useCustomFooter}
            handleCustomHeaderChange={this.handleCustomHeaderChange}
            handleCustomFooterChange={this.handleCustomFooterChange}
            customHeader={customHeader}
            customFooter={customFooter}
          />
        </div>
      </div>
    )
  }
}

export default PrintSetup
