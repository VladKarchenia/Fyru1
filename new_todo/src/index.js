import ReactDOM from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './js/reducers'
import { permanentSave } from './js/middleware'
import App from './js/components/App/App.jsx'
import './styles/main.scss'
import 'normalize.css/normalize.css'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(permanentSave),
)

const store = createStore(
  rootReducer,
  enhancer,
)
const appContainer = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer,
)
