import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

    return (

        <div className="app-wraper">

            <HeaderContainer/>
            <SideBar/>
            <MainContent/>
            <Footer/>

        </div>

    );
}


export default App;
