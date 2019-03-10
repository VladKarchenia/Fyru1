import React from 'react'

import Header from '../Header'
import ListManagement from '../ListManagement'
import InputField from '../InputField'
import SortComponent from '../SortComponent'
import TodoList from '../TodoList'
import Footer from '../Footer'

const App = () => [
  <Header key='Header' />,
  <ListManagement key='ListManagement' />,
  <InputField key='InputField' />,
  <SortComponent key='SortComponent' />,
  <TodoList key='TodoList' />,
  <Footer key='Footer' />,
]

export default App
