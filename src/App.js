import './App.scss';
import React, { Component } from 'react'
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {

  render() {
    return (
      <div>
        <Layout/>
        <BurgerBuilder/>
        <h1>Test</h1>
      </div>
    );

  }
}

export default App;
