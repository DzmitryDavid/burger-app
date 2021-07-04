import React from 'react'
import './Overlay.scss';

const Overlay = (props) => (
  props.show ? <div onClick={props.modalClose} className="Overlay" ></div> : null
  
)


export default Overlay;
