import React, { Component } from 'react'
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {

  render() {
    return (
      <>
        <Layout>
          <Switch>

            <Route path="/burger-app" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
          
          </Layout>
      </>
    );

  }
}

export default App;
