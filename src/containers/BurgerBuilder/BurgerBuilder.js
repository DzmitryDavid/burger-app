import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import {connect} from 'react-redux';
import * as actionType from '../../store/actions'
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.5,
  bacon: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    // ingredients: null,
    purchasable: false,
    purchasing: false,
    totalPrice: 4,
    isLoading: false,
    isError: false,
  };
  componentDidMount() {
    // console.log(this.state)
    // axios
    //   .get('/ingredients.json')
    //   .then((response) => this.setState({ ingredients: response.data }))
    //   .catch((err) => this.setState({ isError: true }));
    // this.setState(this.props.ingredients)  
  }
  
  purchasingHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  updatePurchase = (updatedIngredients) => {
    const sum = Object.values(updatedIngredients).reduce(
      (acc, el) => (acc += el),
      0
    );
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchase(updatedIngredients);
  };

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if (oldCount <= 0) {
      return;
    }

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchase(updatedIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push(`price=${this.state.totalPrice}`)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?'+ queryString,
    });
  };

  render() {
    console.log(this.props)
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.isError ? (
      <p>'Ingredients can't loaded...'! </p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            disabled={disabledInfo}
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            ordered={this.purchasingHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          continue={this.purchaseContinueHandler}
          modalClose={this.purchaseCancelHandler}
          ingredients={this.props.ings}
        />
      );
    }

    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          modalClose={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>  dispatch({type: actionType.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) =>  dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName})
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(BurgerBuilder);
