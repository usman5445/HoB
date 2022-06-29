import React from 'react'
import burgermenu from "../../assests/Burger Menu.svg"
import Search from "../../assests/Search.svg"
import heart from "../../assests/Outline-Heart.svg"
import cart from "../../assests/Empty.svg"
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import { CButton ,CCollapse,CCard,CCardBody} from '@coreui/react'
import "./Navbar.css"


const Navbar = () => {
    const [visible, setVisible] = useState(false)
  return (
  
    <nav className="navbar bg-light " style={{position:"fixed",zIndex:"5",width:"100vw"}} >
  <div className="container-fluid">
        <a className="navbar-brand">
        
    <CButton className="mb-3 burgerMenu" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample" ><img src={burgermenu} alt="..."></img></CButton>
    <div style={{ maxHeight: '50px'}}>
      <CCollapse id="collapseWidthExample" horizontal visible={visible}>
        <CCard style={{width: '300px'}}>
                  <CCardBody>
                    <Sidebar/>
 
                           </CCardBody>
        </CCard>
      </CCollapse>
    </div>

        
    </a>
    <form className="d-flex" role="search">
    <img className='me-3'  src={Search} alt="..."></img>
    <img className='me-3'  src={cart} alt="..."></img>
    <img className='me-3' src={heart} alt="..."></img>
    </form>
  </div>
</nav>
  )
}

export default Navbar
