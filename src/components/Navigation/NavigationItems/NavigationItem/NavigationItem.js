import React from 'react'
import {NavLink} from 'react-router-dom';
import './NavigationItem.scss';

const NavigationItem = (props) => {
  console.log(props)
  return (
    <li className="NavigationItem">
    <NavLink activeClassName="active" to={props.link}>{props.children}</NavLink>
  </li>
  )
}


export default NavigationItem;
