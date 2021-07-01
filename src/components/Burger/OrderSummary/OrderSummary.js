import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map((ingredient, idx) => <li key={ingredient}><span> {ingredient} : {props.ingredients[ingredient]} </span>  </li>)
  
  return (
    <>
    <h3>Your order</h3>
    <p>Your burger with following ingredients :</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p>Continue to Checkout?</p>
    <Button btnType="Danger" clicked={props.modalClose}> CANCEL </Button>
    <Button btnType="Success" clicked={props.continue}> CONTINUE </Button>
    </>
  )
}

export default OrderSummary
