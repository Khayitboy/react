import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: "What's going on here?", likesCount:5},
  {id: 2, message: "how are you?", likesCount:10},
];
let dialogs = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "User"},
  {id: 3, name: "User 2"},
];
let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing."},
  {id: 3, message: "What's up"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
