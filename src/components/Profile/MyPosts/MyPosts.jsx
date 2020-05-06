import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let counter = 0;


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

            <Post message={counter} />
            <Post message="чета" />
            <Post message="Ну хватит уже" />
        </div>
    );
}

export default MyPosts;
