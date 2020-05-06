import React from 'react';
import mainContentPic from "./../../img/mainContentPic01.jpg";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <img src={mainContentPic} />
            </div>
            <div>
                Avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
