import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Overlay from '../../UI/Overlay/Overlay';
import './SideDrawer.scss';

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if(props.open) {
    attachedClasses = ["SideDrawer", "Open"]
  }
  return (
    <>
    <Overlay show={props.open} modalClose={props.closed} />
    <div className={attachedClasses.join(' ')}>
      <div className="SideDrawer-logo">
        <Logo/>
      </div>
      <nav>
        <NavigationItems />
      </nav>      
    </div>
    </>
  )
}

export default SideDrawer
