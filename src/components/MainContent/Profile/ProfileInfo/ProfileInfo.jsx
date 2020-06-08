import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
console.log(props.profileInfo.photos)
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={props.profileInfo.photos.large} alt=''   />
            </div>
            <div className={s.ava}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;