import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App/app/App.tsx'

import './index.scss'
import { Context } from './store/context.ts'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
)
