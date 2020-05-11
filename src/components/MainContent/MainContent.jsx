import React from "react";
import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function MainContent(props) {

    return (

        <div className={s.mainContent}>
            <Route path='/Profile' render={() => <Profile postsData={props.postsData}/>}/>
            <Route path='/Dialogs' render={() => <Dialogs usersDialogsData={props.usersDialogsData} messagesData={props.messagesData}/>}/>
            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
        </div>

    );
}

export default MainContent;