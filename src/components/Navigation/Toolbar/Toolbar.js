import React from 'react';
import './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo />
    <nav>
    <NavigationItems/>
      
    </nav>
  </header>
);


export default Toolbar;