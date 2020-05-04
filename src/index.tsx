import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './Styles/index.css'
import './Styles/globals.css'
import './Styles/App.css'
import './Styles/Splash.css'
import './Styles/Button.css'
import './Styles/Contact.css'
import './Styles/Rainbow.css'
import './Styles/SocialMedia.css'
import './Styles/Footer.css'
import './Styles/Projects.css'

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
