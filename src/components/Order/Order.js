import React from 'react';
import './Order.scss';

const Order = (props) => {
  const ingredients = []
  for(let ingredientName in props.ingredients) {
    ingredients.push({
      ingredient: ingredientName,
      amount: props.ingredients[ingredientName]
    })
  }
  const ingredientOutput = ingredients.map( (ig) => {
    return <span
      style={{textTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #cecece',
      padding: '5px'
    }}
      key={ig.ingredient}>{ig.ingredient} : {ig.amount}</span>
  })
  return (
    <div className="order">
      <p>Ingredients: {ingredientOutput} </p>
      <p>Price <strong> USD: {Number.parseFloat(props.price).toFixed(2)}</strong> </p>
    
    </div>
  )
}
export default Order; 