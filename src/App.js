import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        // console.log(this.props.initialized);
        if (!this.props.initialized) {
            return (
                <Preloader/>
            )
        }

        return (
            <div className="app-wraper">
                <HeaderContainer/>
                <SideBar/>
                <MainContent/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
