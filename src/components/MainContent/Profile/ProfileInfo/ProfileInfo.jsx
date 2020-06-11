import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {

    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.ava} src={props.profileInfo.photos.large ? props.profileInfo.photos.large : props.defaultUserPic}
                     alt=''/>
            </div>
            <div >
                {props.profileInfo.fullName}
            </div>
            <div>
                {props.profileInfo.aboutMe}
            </div>
        </div>
    );
}

export default ProfileInfo;