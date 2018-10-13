import React, { Component } from "react"
import Header from '../Header/Header.jsx'
import ListManagement from '../ListManagement/ListManagement.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Footer from '../Footer/Footer.jsx'
import _omit from 'lodash/omit'
import _set from 'lodash/set'
import fileSaver from 'file-saver'
import { readFile } from '../TodoList/helper.js'

class App extends Component {
  state = {
    items: {},
    listName: 'My Todo List'
  }

  exportList = () => {
    const { items, listName } = this.state
    const json = [JSON.stringify(items, null, 2)]
    const fileName = `${listName}.json`
    const file = new Blob(json, {type: 'application/json'});
    fileSaver.saveAs(file, fileName)
  }

  importList = () => {
    readFile()
  }

  updateListName = listName => this.setState({ listName })

  updateItemByKey = (id, key, value) => {
    const { items } = this.state
    this.setState({ items: {..._set(items, [id, key] , value)} })
  }

  addItem = value => {
    const { items } = this.state
    const id = Date.now()
    this.setState({
      items: {
        ...items,
        [id]: {
          id,
          value,
          isPinned: false,
          isCompleted: false
        }
      }
    })
  }

  onDelete = id => {
    const { items } = this.state
      this.setState({ items: _omit(items, id) })
  }

  render() {

    return [
      <Header key='Header' />,
      <ListManagement key='ListManagement' listName={this.state.listName} updateListName={this.updateListName} exportList={this.exportList} importList={this.importList} />,
      <TodoList key='TodoList' items={this.state.items} onDelete={this.onDelete} updateItemByKey={this.updateItemByKey} addItem={this.addItem} />,
      <Footer key='Footer' />
    ]
  }
}

export default App
