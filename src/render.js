import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, addTextAreaChangeToState} from "./redux/state";


export let reRender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addTextAreaChangeToState={addTextAreaChangeToState}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
