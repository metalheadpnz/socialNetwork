import React from "react";
import mainContentPic from "../../../../img/mainContentPic01.jpg";
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={mainContentPic} alt=''   />
            </div>
            <div className={s.ava}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;