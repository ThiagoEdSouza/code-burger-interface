import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, toast } from 'react-toastify';

import Routes from './routes/routes'
import AppProvider from './hooks'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={3000} theme='colored' />
    <GlobalStyles />
  </>,

  document.getElementById('root')
)
