import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './Styles/index.css'
import './Styles/globals.css'
import './Styles/App.css'
import './Styles/Splash.css'
import './Styles/Button.css'

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
