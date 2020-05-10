import React from 'react';
import s from './MyPosts.module.css';
import PostItem from './PostItem/PostItem';
import AddPostForm from "./AddPostForm/AddPostForm";

function MyPosts(props) {

        return (
        <div className={s.MyPosts}>
            <h3>
                My posts
            </h3>
            <AddPostForm/>
            <PostItem postsData={props.postsData}/>
        </div>
    );
}

export default MyPosts;
