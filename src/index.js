import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  Provider from './context/Provider';
import store from './redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
