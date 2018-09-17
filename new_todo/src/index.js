import ReactDOM from 'react-dom'
import React from 'react'
import App from './js/Components/App/App.jsx'
import './styles/styles.scss'
import './styles/reset-src.scss'


const appContainer = document.getElementById('app')

ReactDOM.render(<App />, appContainer)
