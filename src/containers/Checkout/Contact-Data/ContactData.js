import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axiosInstance from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import './ContactData.scss';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Adress',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Your Phone Number',
        },
        value: '',
        validation: {
          minLength: 12,
          required: true,
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
        validation: {},
        valid: true 
      },
    },
    isLoading: false,
    formIsValid: false
  };
  
  checkValidation = (value, rules) => {
    let isValid = true;
    if(!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
      isValid = value.length === rules.minLength && isValid
    }
    return isValid;
  };

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    const formData = {};
    for (let formIdentifier in this.state.orderForm) {
      formData[formIdentifier] = this.state.orderForm[formIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
    };
    axiosInstance
      .post('/orders.json', order)

      .then((response) => {
        this.setState({ isLoading: false });
        this.props.history.push('/burger-app');
      })
      .catch((error) => this.setState({ isLoading: false }));
  };
  inputChangedHandler = (e, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation) 
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid

    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    const elementsInputArray = [];
    for (let key in this.state.orderForm) {
      elementsInputArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {elementsInputArray.map((formEl) => {
          return (
            <Input
              changed={(e) => this.inputChangedHandler(e, formEl.id)}
              key={formEl.id}
              elementType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              value={formEl.config.value}
              invalid={!formEl.config.valid}
              shouldValidate={formEl.config.validation}
              touched={formEl.config.touched}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
      </form>
    );
    return (
      <div className="contactData">
        <h4>Enter your Contact Data</h4>
        {this.state.isLoading ? <Spinner /> : form}
      </div>
    );
  }
}

export default ContactData;
