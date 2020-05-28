import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";
import PostsListContainer from "./PostsList/PostsListContainer";

function Profile(props) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <AddPostFormContainer/>
            <PostsListContainer/>
        </div>
    );
}

export default Profile;
