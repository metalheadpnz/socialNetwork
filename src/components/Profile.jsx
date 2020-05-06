import React from 'react';
//import mainContentPic from "./../src/img/images.jpg";
import mainContentPic from "./../img/mainContentPic01.jpg";

function Profile() {
    return (
        <div className="profile">
            <img src={mainContentPic} className="mainContentPic" />
            <br />
            Компонента профайл
        </div>
    );
}

export default Profile;
