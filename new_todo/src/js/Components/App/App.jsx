import React from 'react'

import Header from '../Header/Header.jsx'
import ListManagement from '../ListManagement'
import TodoList from '../TodoList'
import Footer from '../Footer'

const App = () => [
  <Header key='Header' />,
  <ListManagement key='ListManagement' />,
  <TodoList key='TodoList' />,
  <Footer key='Footer' />,
]

export default App
