import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


export let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

