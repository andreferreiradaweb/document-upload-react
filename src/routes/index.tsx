import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AppContexts } from '../contexts'
import { HomePage } from '../pages'

export function MyRoutes() {
  return (
    <BrowserRouter>
      <AppContexts>
        <ToastContainer closeButton={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContexts>
    </BrowserRouter>
  )
}
