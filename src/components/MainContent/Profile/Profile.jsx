import React from 'react';
import mainContentPic from "../../../img/mainContentPic01.jpg";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
