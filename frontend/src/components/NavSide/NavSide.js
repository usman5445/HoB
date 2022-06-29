import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './NavSide.css';
// import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import burgermenu from "../../assests/Burger Menu.svg"
import Search from "../../assests/Search.svg"
import heart from "../../assests/Outline-Heart.svg"
import cart from "../../assests/Empty.svg"
import cross from "../../assests/X.svg"
import smile from '../../assests/smilegreylogo.svg';
import logo from "../../assests/logo.svg"
const NavSide = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
 
  
    return (
      <>
          <div className='navbar'>
          <div className="container-fluid">
            <a href='#' className='navbar-brand'>
              <button className='menuBtn'  onClick={showSidebar}  style={{background:"white"}}>
                <img src={burgermenu}></img>
                </button> 
            </a>
            <form className="d-flex" role="search">
    <img className='me-3'  src={Search} alt="..."></img>
    <img className='me-3'  src={cart} alt="..."></img>
    <img className='me-3' src={heart} alt="..."></img>
    </form>
          </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:5}}>
            <div className='Navside Cont d-flex align-items-center justify-content-center flex-column' >
            <div className='upperCont d-flex align-items-center justify-content-center flex-row'>
          <span className='HOBLOGO'>
                <img src={logo}  style={{width:"8rem"}}/>
            </span>
            <span className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <a href='#' className='menu-bars'>
               <img src={cross}/>
                </a>
              </li>
              </span>
            </div>
             <hr/>
           <div className='middleCont d-flex align-items-center justify-content-center flex-column' style={{height:"75vh"}}>
             <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a href={item.path}>
                        <img src={smile}/>
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
                </ul>
                <hr/>
                </div>
                <div className='lastCont'>
                    <div className='MyAccount'>MY ACCOUNT</div>
                </div>
                </div>
          </nav>
    
      </>
    );
  
}

export default NavSide
