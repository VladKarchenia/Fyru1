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

  toggleCustomHeader = () => this.setState({
    useCustomHeader: !this.state.useCustomHeader
  })

  toggleCustomFooter = () => this.setState({
    useCustomFooter: !this.state.useCustomFooter
  })

  setOrientation = (value) => this.setState({ orientation: value })

  setFilter = (filter) => this.setState({ activeFilter: filter })

  onChangeHeader = (e) => this.setState({
    customHeader: e.target.value
  })

  onChangeFooter = (e) => this.setState({
    customFooter: e.target.value
  })

  render() {
    const { activeFilter, useCustomHeader, useCustomFooter, customHeader, customFooter } = this.state
    const { items, listName, printEnd } = this.props
    return (
      <div className={styles.root}>
        <Header listName={listName} printEnd={printEnd} />
        <div className={styles.mainContainer}>
          <Preview
            items={items}
            activeFilter={activeFilter}
            customHeader={useCustomHeader && customHeader.trim()}
            customFooter={useCustomFooter && customFooter.trim()}
          />
          <Options
            options={this.state}
            setOrientation={this.setOrientation}
            setFilter={this.setFilter}
            toggleCustomHeader={this.toggleCustomHeader}
            toggleCustomFooter={this.toggleCustomFooter}
            onChangeHeader={this.onChangeHeader}
            onChangeFooter={this.onChangeFooter}
          />
        </div>
      </div>
    )
  }
}

export default PrintSetup
