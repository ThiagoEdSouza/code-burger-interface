import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, toast } from 'react-toastify';

import Routes from './routes/routes'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={3000} theme='colored' />
    <GlobalStyles />
  </>,

  document.getElementById('root')
)
