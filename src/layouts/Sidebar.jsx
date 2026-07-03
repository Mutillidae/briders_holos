
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return(
    <aside style={{width:'220px',background:'#b8860b',padding:'20px',minHeight:'100vh'}}>
      <NavLink to='/'>Inicio</NavLink><br/>
      <NavLink to='/historia'>Historia</NavLink><br/>
      <NavLink to='/noticias'>Noticias</NavLink><br/>
      <NavLink to='/docentes'>Docentes</NavLink><br/>
      <NavLink to='/deportes'>Deportes</NavLink><br/>
      <NavLink to='/promociones'>Promociones</NavLink><br/>
      <NavLink to='/banda'>Banda</NavLink><br/>
      <NavLink to='/suris'>Suris</NavLink><br/>
      <NavLink to='/galeria'>Galeria</NavLink><br/>
      <NavLink to='/contacto'>Contacto</NavLink><br/>
    </aside>
  )
}
