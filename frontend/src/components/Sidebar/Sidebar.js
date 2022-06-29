import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CIcon,CBadge,CNavGroup,CSidebarToggler,CButton ,CCollapse,CCard,CCardBody} from '@coreui/react'
import logo from "../../assests/logo.svg"
import { useState } from 'react'


import React from 'react'

const Sidebar = () => {
  // const [visible, setVisible] = useState(false)
  return (

    // <>
    // <CButton className="mb-3" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">Button</CButton>
    // <div style={{ minHeight: '120px'}}>
    //   <CCollapse id="collapseWidthExample" horizontal visible={visible}>
    //     <CCard style={{width: '300px'}}>
    //       <CCardBody>
    <CSidebar style={{ height: "100vh", background: "white" }}>
    
  <CSidebarBrand style={{color:"black",background:"white"}}>
    <img src={logo}></img>
  </CSidebarBrand>
  <CSidebarNav style={{top:"20%",color:"black"}}>
    <CNavTitle style={{color:"black"}}>Nav Title</CNavTitle>
    <CNavItem href="#" style={{color:"black"}}>
      {/* <CIcon customClassName="nav-icon"  /> */}
      Nav item
    </CNavItem>
    <CNavItem href="#"style={{color:"black"}}>
      {/* <CIcon customClassName="nav-icon" /> */}
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup toggler="Nav dropdown" >
      <CNavItem href="#"style={{color:"black"}}>
        {/* <CIcon customClassName="nav-icon"  /> Nav dropdown item */}
      </CNavItem>
      <CNavItem href="#">
        {/* <CIcon customClassName="nav-icon"  /> Nav dropdown item */}
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
              </CSidebar>
  //              </CCardBody>
  //       </CCard>
  //     </CCollapse>
  //   </div>
  // </>
  )
}

export default Sidebar






// import {
//   ProSidebar,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent
// } from "react-pro-sidebar";
// import {  SidebarItem } from "react-responsive-sidebar";

// import React from 'react'

// const Sidebars = () => {
//   return (
//     <div className="Sidebarcontainer">
        
//       <SidebarItem> <img src={logo}></img></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//       <SidebarItem></SidebarItem>
//     </div>
//   )
// }

// export default Sidebars




// export default function SimpleList() {
//     const items = [
//       <SidebarItem style={{background:"black"}}>
//         <img src={logo}></img>
//       </SidebarItem> ,
//       <hr></hr>,
//       <SidebarItem>Profile</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>,
//       <SidebarItem>Settings</SidebarItem>
//     ];
  
//     return <Sidebar breakpoint={980} content={items}></Sidebar>;
//   }














// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;