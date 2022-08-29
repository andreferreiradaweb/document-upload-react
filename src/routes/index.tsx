import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from '../pages'

export function MyRoutes() {
  return (
    <BrowserRouter>
      <ToastContainer closeButton={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
