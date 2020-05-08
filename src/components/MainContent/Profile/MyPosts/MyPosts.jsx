import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsData = [
        {id: 1, message: 'First post', likeCounter: 15},
        {id: 1, message: 'чета', likeCounter: 10},
        {id: 1, message: 'Metallica', likeCounter: 100500},
        {id: 1, message: 'nothing to commit', likeCounter: 666},
        {id: 1, message: 'Ну хватит уже', likeCounter: 13}
    ]

    let postsArr = postsData.map(elem => <Post message={elem.message} likeCounter={elem.likeCounter}/>);

    return (
        <div className={s.myPosts}>
            <h3>
                My posts
            </h3>
            <form action="" className={s.form}>
                <div>
                    <textarea type="text"/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
            {postsArr}
        </div>
    );
}

export default MyPosts;
