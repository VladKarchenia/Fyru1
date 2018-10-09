import React, { Component } from "react"
import Header from '../Header/Header.jsx'
import ListManagement from '../ListManagement/ListManagement.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Footer from '../Footer/Footer.jsx'
import _omit from 'lodash/omit'
import _set from 'lodash/set'

class App extends Component {
  state = {
    items: {},
    listName: 'My Todo List'
  }

  updateListName = listName => this.setState({ listName })

  updateItemByKey = (id, key, value) => {
    const { items } = this.state
    this.setState({ items: _set(items, [id, key] , value) })
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
      <Header key={Header} />,
      <ListManagement key={ListManagement} listName={this.state.listName} updateListName={this.updateListName} />,
      <TodoList key={TodoList} items={this.state.items} onDelete={this.onDelete} updateItemByKey={this.updateItemByKey} addItem={this.addItem} />,
      <Footer key={Footer} />
    ]
  }
}

export default App
