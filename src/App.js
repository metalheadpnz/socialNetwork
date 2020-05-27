import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";


function App(props) {

    return (

        <div className="app-wraper">

            <Header/>
            <SideBar SideBar={props.state.SideBar}/>
            <MainContent store={props.store} state={props.state} />
            <Footer/>

        </div>

    );
}


export default App;
