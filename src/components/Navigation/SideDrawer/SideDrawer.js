import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.scss';

const SideDrawer = () => {

  return (
    <div className="SideDrawer">
      <div className="SideDrawer-logo">
        <Logo/>
      </div>
      <nav>
        <NavigationItems />
      </nav>      
    </div>
  )
}

export default SideDrawer
