import React, { Component } from "react"
import Header from '../Header/Header.jsx'
import ToDoListManagement from '../ToDoListManagement/ToDoListManagement.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Footer from '../Footer/Footer.jsx'

export default class App extends Component {

  render() {
    return [
      <Header key={1} />,
      <ToDoListManagement key={2} />,
      <TodoList key={3} />,
      <Footer key={4} />
    ]
  }
}
