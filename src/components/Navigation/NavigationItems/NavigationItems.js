import React from 'react'
import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem exact link="/burger-app">Burger Builder</NavigationItem>
    <NavigationItem exact link="/orders">Orders</NavigationItem>
  </ul>
)

export default NavigationItems
