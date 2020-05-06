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
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;
