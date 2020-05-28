import React from 'react';
import s from './PostsList.module.css';
import PostItem from "./PostItem/PostItem";

function PostsList(props) {

    let postsDataArr = props.PostsListData.PostItemData.map
    (m => <PostItem PostItemData={m}/>);

    return (
        <div className={s.PostsList}>
            <div>
                {postsDataArr}
            </div>
        </div>
    );
}

export default PostsList;