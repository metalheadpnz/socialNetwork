import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messagesData = [
    {id: 1, message: 'Message 1'},
    {id: 2, message: 'Message 2'},
    {id: 3, message: 'Message 3'},
    {id: 4, message: 'Message 4'},
    {id: 5, message: 'Message 5'},
]

let usersInListData = [
    {id: 1, userName: 'Vasyan'},
    {id: 2, userName: 'Boryan'},
    {id: 3, userName: 'Mixan'},
    {id: 4, userName: 'Mixan'},
    {id: 5, userName: 'Mixan'}
]

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
