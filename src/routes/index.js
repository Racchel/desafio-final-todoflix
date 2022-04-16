/** react */
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Página inicial</h1>} />

      <Route path='/movies/all' element={<h1>Todos os filmes</h1>} />

      <Route path='/movies/favorites' element={<h1>Filmes favoritos</h1>} />

      <Route path='/movies/watched' element={<h1>Filmes asssistidos</h1>} />

      <Route path='/movies/added' element={<h1>Filmes adicionados</h1>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}