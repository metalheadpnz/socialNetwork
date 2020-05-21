import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";


function App(props) {

    return (

        <div className="app-wraper">

            <Header/>
            <SideBar SideBar={props.state.SideBar}/>
            {/*<MainContent Dialogs={props.state.Dialogs} Profile={props.state.Profile} dispatch={props.dispatch}/>*/}
            <MainContent state={props.state} dispatch={props.dispatch}/>
            <Footer/>

        </div>

    );
}


export default App;
