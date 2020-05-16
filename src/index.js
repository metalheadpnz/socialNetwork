// import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let MyRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

MyRender(state);

subscribe(MyRender);


serviceWorker.unregister();
