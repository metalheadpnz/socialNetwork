import React from 'react';
import s from './PostsList.module.css';
import PostItem from "./PostItem/PostItem";

function PostsList(props) {
let key=0;
    let postsDataArr = props.postItemData.map
    (m => <PostItem key={key++} PostItemData={m}/>);

    return (
        <div className={s.PostsList}>
            <div>
                {postsDataArr}
            </div>
        </div>
    );
}

export default PostsList;