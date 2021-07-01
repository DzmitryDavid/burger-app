import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.5,
  bacon: 0.4,
  meat: 1.3,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 2,
      meat: 2,
      bacon: 2
    },

    totalPrice:4
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice =  this.state.totalPrice ;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  removeIngredientsHandler = (type) => {
    
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if(oldCount <= 0) {
      return;
    }

    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice =  this.state.totalPrice ;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <>
      <Burger ingredients={this.state.ingredients}/> 
      <BuildControls 
        price={this.state.totalPrice}
        disabled={disabledInfo}
        ingredientAdded={this.addIngredientsHandler} 
        ingredientRemoved={this.removeIngredientsHandler} />
      </>
    );
  }
}

export default BurgerBuilder;