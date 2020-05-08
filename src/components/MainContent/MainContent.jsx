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
            <Route exact path='/' component={Profile}/> {/*Для отрисовки не пустого MainContent при загрузке*/}
            <Route path='/Profile' component={Profile}/>
            <Route path='/Messages' component={Messages}/>
            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>

        </div>

    );
}

export default MainContent;