import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'; 
import * as serviceWorker from './serviceWorker';
import state, { addPost, addMessage, updateMessage, updateNewPost, subscribe } from './redux/state';


let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage} updateMessage={updateMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
