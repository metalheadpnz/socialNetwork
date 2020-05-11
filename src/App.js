import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wraper">

                <Header/>
                <NavBar/>
                <MainContent MainContentData={props.state.MainContentData}/>
                <Footer/>

            </div>
        </BrowserRouter>
    );
}


export default App;
