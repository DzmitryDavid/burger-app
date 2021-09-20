import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducer';
import App from './App';
import './index.scss';

const store = createStore(reducer)


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

