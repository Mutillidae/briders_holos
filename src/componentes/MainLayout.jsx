
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function MainLayout(){
  return(
    <>
      <Header/>
      <div style={{display:'flex'}}>
        <Sidebar/>
        <div style={{flex:1,padding:'20px'}}>
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
