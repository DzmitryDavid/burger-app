import React from 'react';
import Overlay from '../Overlay/Overlay';
import './Modal.scss';


const Modal = (props) => {
  console.log(props.show);
  return (
    <>
    <Overlay show={props.show} modalClose={props.modalClose}/>
    <div
      className="Modal"
      style={{
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'}}>
        {props.children}
    </div>
    </>
  )
}

export default Modal
