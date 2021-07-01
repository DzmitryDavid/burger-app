import React from 'react'

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
    </>
  )
}

export default OrderSummary
