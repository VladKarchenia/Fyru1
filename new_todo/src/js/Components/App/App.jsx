import React from "react"
import Header from '../Header/Header.jsx'
import ListManagement from '../ListManagement/ListManagement.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Footer from '../Footer/Footer.jsx'

const App = () => [
  <Header key={1} />,
  <ListManagement key={2} />,
  <TodoList key={3} />,
  <Footer key={4} />
]

export default App
