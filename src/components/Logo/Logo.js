import React from 'react';
import './Logo.scss';
import burgerLogo from '../../assets/img/burger.png';

const Logo = () => (
  <div className="Logo">
    <img src={burgerLogo} alt="Burger"/>
  </div>
)

export default Logo;
