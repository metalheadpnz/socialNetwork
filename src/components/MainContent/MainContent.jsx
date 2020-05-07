import React from "react";
import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

function MainContent() {
    return (

        <div className={s.mainContent}>
            <Route path='/Profile' component={Profile}/>
            <Route path='/Dialogs' component={Dialogs}/>
        </div>

    );
}

export default MainContent;