import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => (

  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className="Toolbar-logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
    <NavigationItems/>
    </nav>
  </header>
  
);


export default Toolbar;