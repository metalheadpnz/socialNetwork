import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <form action="" className={s.form}>
                <div>
                    <textarea  type="text"/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>

            <Post message="First post" likeCounter="15"/>
            <Post message="чета" likeCounter="100500"/>
            <Post message="Ну хватит уже" likeCounter="9"/>

        </div>
    );
}

export default MyPosts;
