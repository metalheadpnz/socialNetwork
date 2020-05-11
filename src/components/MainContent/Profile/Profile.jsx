import React from 'react';

import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPostForm from "./AddPostForm/AddPostForm";
import PostsList from "./PostsList/PostsList";

function Profile(props) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <AddPostForm/>
            <PostsList PostListData={props.ProfileData.PostListData}/>

        </div>
    );
}

export default Profile;
