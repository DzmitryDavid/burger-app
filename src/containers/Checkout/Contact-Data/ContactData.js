import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axiosInstance from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import './ContactData.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: '',
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

      .then( response => {
        this.setState( { isLoading: false } )
        this.props.history.push('/burger-app')
      }
      ).catch((error) => this.setState({ isLoading: false }));
  };
  
  render() {
    let form = (<form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your email" />
      <input type="text" name="street" placeholder="Street" />
      <input type="text" name="postal" placeholder="Postal code" />
      <Button clicked={this.orderHandler} btnType="Success">
        Order
      </Button>
    </form>)
    return (
      <div className="contactData">
        <h4>Enter your Contact Data</h4>
        {this.state.isLoading ? <Spinner/> : form}
      </div>
    );
  }
}

export default ContactData;
