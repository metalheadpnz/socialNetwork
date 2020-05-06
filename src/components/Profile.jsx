import React from 'react';
import mainContentPic from "./../img/mainContentPic01.jpg";
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.profile}>
            <img src={mainContentPic} />
            <br />
            Компонента профайл
        </div>
    );
}

export default Profile;
