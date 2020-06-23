import React from "react";
import s from "./MainContent.module.css";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import Login from "../Login/Login";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";


function MainContent(props) {

    return (
        <div className={s.mainContent}>
            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/Users' render={() => <UsersContainer/>}/>
            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Login' component={Login}/>

        </div>

    );
}

export default MainContent;