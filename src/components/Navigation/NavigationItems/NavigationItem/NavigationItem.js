import React from 'react'
import './NavigationItem.scss';

const NavigationItem = (props) => (
  <li className="NavigationItem">
    <a 
      className={`NavigationItem ${props.active ? 'active' : null}`} 
      href={props.link}>{props.children}</a>
  </li>
)


export default NavigationItem;
