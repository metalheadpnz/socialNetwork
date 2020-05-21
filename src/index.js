import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let firstRender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

firstRender(store.getState());

store.subscribe(firstRender);

serviceWorker.unregister();
