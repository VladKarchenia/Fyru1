import ReactDOM from 'react-dom'
import React from "react"
import Core from './js/Components/Core/Core.jsx'
import './styles/styles.scss'

const appContainer = document.getElementById('app')
const btnNames = {
  generateNum: 'Generate Num',
  changeBg: 'Change BG',
  ok: 'OK',
  cancel: 'Cancel'
}

ReactDOM.render(<Core btnNames = {btnNames} />, appContainer)
