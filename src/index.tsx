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

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import createMuITheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import lightBlue from '@material-ui/core/colors/lightBlue'
import pink from '@material-ui/core/colors/pink'

const theme = createMuITheme({
  palette: {
    primary: lightBlue,
    secondary: pink
  }
})

const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
