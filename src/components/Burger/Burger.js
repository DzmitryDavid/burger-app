import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import './Burger.scss';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, ind) => {
      return <BurgerIngredient key={igKey + ind} type={igKey}/>
    })
  })
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default Burger;
