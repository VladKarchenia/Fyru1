import React, { Component } from "react"
import Header from '../Header/Header.jsx'
import ListManagement from '../ListManagement/ListManagement.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Footer from '../Footer/Footer.jsx'
import _omit from 'lodash/omit'
import _set from 'lodash/set'
import _throttle from 'lodash/throttle'
import fileSaver from 'file-saver'
import { readFile, titleName } from '../TodoList/helper.js'

export const NO_DUE_DATE = 'No due date'

class App extends Component {
  state = {
    items: {},
    listName: 'My Todo List'
  }

  componentDidMount() {
    const storedState = localStorage.getItem('state')
    const { listName } = this.state
    if (storedState) {
      this.setState(JSON.parse(storedState))
    }
    titleName(listName)
  }

  componentDidUpdate() {
    const { listName } = this.state
    this.saveState()
    titleName(listName)
  }

  saveState = _throttle(() => {
      localStorage.setItem('state', JSON.stringify(this.state))
    }, 3000)

  exportList = () => {
    const { items, listName } = this.state
    const json = JSON.stringify({listName, items}, null, 2)
    const fileName = `${listName}.json`
    const file = new Blob([json], {type: 'application/json'})
    fileSaver.saveAs(file, fileName)
  }

  importList = async (e) => {
    const file = e.target.files[0]
    const json = await readFile(file)
    const newState = JSON.parse(json)
    this.setState( newState )
  }

  updateListName = listName => {
    this.setState({ listName })
  }

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
          isCompleted: false,
          dueDate: NO_DUE_DATE
        }
      }
    })
  }

  onDelete = id => {
    const { items } = this.state
      this.setState({ items: _omit(items, id) })
  }

  render() {
    const { items, listName } = this.state
    return [
      <Header key='Header' />,
      <ListManagement key='ListManagement' listName={listName} updateListName={this.updateListName} exportList={this.exportList} importList={this.importList} />,
      <TodoList key='TodoList' items={items} onDelete={this.onDelete} updateItemByKey={this.updateItemByKey} addItem={this.addItem} />,
      <Footer key='Footer' />
    ]
  }
}

export default App
