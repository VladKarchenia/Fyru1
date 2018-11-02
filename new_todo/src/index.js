import ReactDOM from 'react-dom'
import React from 'react'
import App from './js/Components/App/App.jsx'
import './styles/main.scss'
import 'normalize.css/normalize.css'

const appContainer = document.getElementById('app')

ReactDOM.render(<App />, appContainer)
