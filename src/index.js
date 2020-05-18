import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, addTextAreaChangeToState, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let firstRender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addTextAreaChangeToState={addTextAreaChangeToState}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

firstRender(state);

subscribe(firstRender);

serviceWorker.unregister();
