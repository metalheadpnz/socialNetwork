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
            {/*<Route path='/Profile'*/}
            {/*       render={() => <Profile store={props.store} ProfileData={props.state.Profile}/>}/>*/}

            <Route path='/Profile' render={() => <Profile/>}/>
            <Route path='/Dialogs' render={() => <Dialogs/>}/>
            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
        </div>

    );
}

export default MainContent;