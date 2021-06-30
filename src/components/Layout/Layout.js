import React from 'react';

const Layout =  (props) => {
  return (
    <div>
      <div>Toolbar, Backdrop, sideDrawer</div> 
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;