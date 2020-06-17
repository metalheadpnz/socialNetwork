import React from 'react';
import style from './Profile.module.css';
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";
import PostsListContainer from "./PostsList/PostsListContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import {Redirect} from "react-router-dom";

function Profile(props) {
    if (!props.isAuth) {
        return (<Redirect to='/Login'/>)
    }
    return (
        <div className={style.profile}>
            <ProfileInfoContainer/>
            <AddPostFormContainer/>
            <PostsListContainer/>
        </div>
    );
}

export default Profile;
