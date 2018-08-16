import ReactDOM from 'react-dom'
import React from "react"
import Core from './js/Component/Core/Core.jsx'
import './styles/styles.scss'

const appContainer = document.getElementById('app')
const btnNames = {
    generateNum: 'Generate Num',
    changeBg: 'Change BG'
}

ReactDOM.render(<Core btnNames = {btnNames} />, appContainer)
