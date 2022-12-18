import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ROUTES } from '../constants/routes'
import { AppContexts } from '../contexts'
import { DocsPage, HomePage } from '../pages'

export function MyRoutes() {
  return (
    <BrowserRouter>
      <AppContexts>
        <ToastContainer closeButton={false} />
        <Routes>
          <Route path={ROUTES.home.path} element={<HomePage />} />
          <Route path={ROUTES.docs.path} element={<DocsPage />} />
        </Routes>
      </AppContexts>
    </BrowserRouter>
  )
}
