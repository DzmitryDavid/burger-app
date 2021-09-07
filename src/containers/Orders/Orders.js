import React, { Component } from 'react'
import axios from '../../axios-orders';
import Order from '../../components/Order/Order'

export class Orders extends Component {
  state = {
    orders: [],
    isLoading: true
  }
  componentDidMount() {
    axios
      .get('/orders.json')
      .then(response => {
        const fetchedOrders = [];
        for(let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          })
        }
        console.log(fetchedOrders)
        this.setState({isLoading: false, orders: fetchedOrders})
      })
      .then(err => this.setState({isLoading: false}))
      
  }

  render() {
    return (
      <div>
        {this.state.orders.map( (order) => {
          return <Order 
            key={order.id}
            ingredients={order.ingredients} 
            price={order.price}
          
          />     
        })}
      </div>
    )
  }
}

export default Orders
