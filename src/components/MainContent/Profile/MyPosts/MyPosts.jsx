import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <div>
                My posts
             </div>
            <form action="">
                <input type="text" />
                <button>Add</button>
            </form>

            <Post message="First post" likeCounter="15" />
            <Post message="чета" likeCounter="100500" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />
            <Post message="Ну хватит уже" likeCounter="9" />

        </div>
    );
}

export default MyPosts;
