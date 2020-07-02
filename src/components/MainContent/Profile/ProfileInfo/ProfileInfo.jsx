import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../../common/Preloader";

function ProfileInfo(props) {
    // console.log(props);
    return (<>
            {props.isFetching ? <Preloader/> : <div className={s.profileInfo}>
                <div>
                    <img className={s.ava}
                         src={props.profileInfo.photos.large ? props.profileInfo.photos.large : props.defaultUserPic}
                         alt=''/>
                </div>
                <div>
                    {props.profileInfo.fullName}
                </div>
                <div>
                    {props.profileInfo.aboutMe}
                </div>
                <br/>
                <div>
                    <ProfileStatus updateUserStatusThunk={props.updateUserStatusThunk} status={props.status}/>
                </div>
            </div>}
        </>
    );
}

export default ProfileInfo;