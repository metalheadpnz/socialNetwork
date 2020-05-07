import React from "react";
import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

function MainContent () {
return (
<div className={s.mainContent}>
    <Profile />
</div>
);
}

export default MainContent;