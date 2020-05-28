import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";
import PostsListContainer from "./PostsList/PostsListContainer";

function Profile(props) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <AddPostFormContainer/>
            {/*<PostsList PostsListData={props.ProfileData.PostsListData}/>*/}
            <PostsListContainer/>
        </div>
    );
}

export default Profile;
