import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { animalsApi } from './features/apiSlice'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={ animalsApi }>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
