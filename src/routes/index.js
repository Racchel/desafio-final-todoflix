/** react */
import { Routes, Route, Navigate } from 'react-router-dom'

/** routes */
import { routes } from '../shared/routes'

export const AppRoutes = () => {
  return (
    <Routes>
      {
        routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      }

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}