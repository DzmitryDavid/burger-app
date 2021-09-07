import React from 'react'
import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/burger-app">Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Link</NavigationItem>
  </ul>
)

export default NavigationItems
