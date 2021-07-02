import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';

const Layout =  (props) => {
  return (
    <>
      <div className="content"></div> 
      <Toolbar/>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;