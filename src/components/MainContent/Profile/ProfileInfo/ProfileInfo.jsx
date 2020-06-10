import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
debugger
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={(props.profileInfo.photos.large) ? props.profileInfo.photos.large : props.defaultUserPic}
                     alt=''/>
            </div>
            <div className={s.ava}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;