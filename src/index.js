import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/Store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


// let firstRender = (state) => {
//
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
//
// firstRender(store.getState());
//
// store.subscribe(() => firstRender(store.getState()));


// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );


// setInterval(()=> {
//     store.dispatch({type: "FAKE"})
// }, 1000)

ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,

    document.getElementById('root')
);


serviceWorker.unregister();
