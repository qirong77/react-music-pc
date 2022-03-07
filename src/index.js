import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/index.css'
import '../src/styles/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {' '}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
