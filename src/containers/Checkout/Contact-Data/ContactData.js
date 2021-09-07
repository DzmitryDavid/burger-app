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
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Adress',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{value: 'fastest', displayValue: 'Fastest'},{value: 'cheapest', displayValue: 'Cheapest'}]
        },
        value: ''
      }
    },
    isLoading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props);

    this.setState({ isLoading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    axiosInstance
      .post('/orders.json', order)

      .then((response) => {
        this.setState({ isLoading: false });
        this.props.history.push('/burger-app');
      })
      .catch((error) => this.setState({ isLoading: false }));
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
      <form>  
        {elementsInputArray.map((formEl) => {
          console.log(formEl);
          return (
            <Input
              key={formEl.id}
              elementType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              placeholder={formEl.config.placeholder}
              // value={formEl.config.value}
            />
          );
        })}
        <Button clicked={this.orderHandler} btnType="Success">
          Order
        </Button>
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
