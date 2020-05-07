import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
// import Profile from './components/MainContent/Profile/Profile';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wraper">

                <Header/>
                <Nav/>
                <MainContent/>
                <Footer/>

            </div>
        </BrowserRouter>
    );
}


export default App;
