
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Historia from './pages/Historia'
import Noticias from './pages/Noticias'
import Docentes from './pages/Docentes'
import Deportes from './pages/Deportes'
import Promociones from './pages/Promociones'
import Banda from './pages/Banda'
import Suris from './pages/Suris'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import Dashboard from './pages/Dashboard'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/docentes' element={<Docentes />} />
          <Route path='/deportes' element={<Deportes />} />
          <Route path='/promociones' element={<Promociones />} />
          <Route path='/banda' element={<Banda />} />
          <Route path='/suris' element={<Suris />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/contacto' element={<Contacto />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
