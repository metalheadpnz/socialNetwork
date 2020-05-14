import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import {addPost} from './redux/state';

addPost('сообщение из функции addPost');

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wraper">

                <Header/>
                <SideBar SideBar={props.state.SideBarData}/>
                <MainContent MainContentData={props.state.MainContentData}/>
                <Footer/>

            </div>
        </BrowserRouter>
    );
}


export default App;
