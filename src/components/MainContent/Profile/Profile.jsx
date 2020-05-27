import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";

function Profile(props) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <PostsList PostsListData={props.ProfileData.PostsListData}/>
            <AddPostFormContainer store={props.store}/>

        </div>
    );
}

export default Profile;
