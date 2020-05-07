import React from "react";
import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function MainContent() {
    return (

        <div className={s.mainContent}>
            <Route path='/Profile' component={Profile}/>
            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Messages' component={Messages}/>
        </div>

    );
}

export default MainContent;