import React from 'react'
import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem active link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/">Link</NavigationItem>
  </ul>
)

export default NavigationItems
