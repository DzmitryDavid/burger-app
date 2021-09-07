import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import './CheckoutSummary.scss';

const CheckoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>Your order !</h1>
      <div className="burgerSummaryWrapper">
        <Burger ingredients={props.ingredients} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button clicked={props.checkoutCancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={props.checkoutContinued} btnType="Success">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
