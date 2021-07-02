import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.scss';

const Layout =  (props) => {
  return (
    <>
      <div className="content"></div> 
      <Toolbar/>
      <SideDrawer/>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;