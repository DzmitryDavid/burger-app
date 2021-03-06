import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 4
  }

    purchasingHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  updatePurchase = (updatedIngredients) => {
    const sum = Object.values(updatedIngredients)
    .reduce((acc, el)  => acc += el, 0)
    console.log(sum);
    this.setState( {purchasable: sum > 0} )  
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

    this.updatePurchase(updatedIngredients)
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

    this.updatePurchase(updatedIngredients)
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    console.log('You continue!');
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
      <Modal modalClose={this.purchaseCancelHandler} show={this.state.purchasing}>
        <OrderSummary 
          price={this.state.totalPrice}
          continue={this.purchaseContinueHandler}
          modalClose={this.purchaseCancelHandler}
          ingredients={this.state.ingredients} />
          
      </Modal>

      <Burger ingredients={this.state.ingredients}/> 
      <BuildControls  
        purchasable={this.state.purchasable}
        price={this.state.totalPrice}
        disabled={disabledInfo}
        ingredientAdded={this.addIngredientsHandler} 
        ingredientRemoved={this.removeIngredientsHandler}
        ordered={this.purchasingHandler}/>
      </>
    );
  }
}

export default BurgerBuilder;