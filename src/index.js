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

let postsData = [
    {id: 1, message: 'First post', likeCounter: 15},
    {id: 1, message: 'First post', likeCounter: 15},
    {id: 1, message: 'чета', likeCounter: 10},
    {id: 1, message: 'Metallica', likeCounter: 100500},
    {id: 1, message: 'nothing to commit', likeCounter: 666},
    {id: 1, message: 'Ну хватит уже', likeCounter: 13}
]

let usersDialogsData = [
    {id: 1, userName: 'Vasyan'},
    {id: 2, userName: 'Boryan'},
    {id: 3, userName: 'Mixan'},
    {id: 4, userName: 'Mixan'},
    {id: 5, userName: 'Mixan'}
]

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} postsData={postsData} usersDialogsData={usersDialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
