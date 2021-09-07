import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import './Burger.scss';

const Burger = (props) => {
console.log(props)
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, ind) => {
      return <BurgerIngredient key={igKey + ind} type={igKey}/>
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, [])
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      {(transformedIngredients.length === 0 ) ? "Please start adding ingredients" : transformedIngredients }
      <BurgerIngredient type="bread-bottom"/> 
    </div>
  )
}

export default Burger;
