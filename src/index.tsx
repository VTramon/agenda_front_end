import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContactContextProvider } from './contexts/ContactContext'
import './GlobalStyles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
