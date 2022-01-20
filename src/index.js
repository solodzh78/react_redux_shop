import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import newStore from './store';
const store = newStore();

// setTimeout(() => {
//   store.dispatch({
//     type: 'SET_BOOKS',
//     payload: {
//       books: [
//         {
//           id: 0,
//           title: 'Hello world'
//         }
//       ]
//     }
//   })
// }, 1000);

// setTimeout(() => {
//   store.dispatch({
//     type: 'SET_BOOKS',
//     payload: {
//       books: [
//         {
//           id: 0,
//           title: 'Hello world1'
//         }
//       ]
//     }
//   })
// }, 2000);

ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
