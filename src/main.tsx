import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
)
