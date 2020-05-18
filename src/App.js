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
                <SideBar SideBar={props.state.SideBarData}/>
                <MainContent MainContentData={props.state.MainContentData} addPost={props.addPost} addTextAreaChangeToState={props.addTextAreaChangeToState}/>
                <Footer/>

            </div>

    );
}


export default App;
