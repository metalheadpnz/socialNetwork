import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";


let Users = React.memo( props => {
    console.log('render');
    return <div>
        <div
            // говноПагинация
            className={styles.pagination}>
            {(props.pagination.shiftDown) && <div onClick={() => {
                props.setCurrentPage(props.pagination.currentPage - 10);
                props.onPageChanged(props.pagination.currentPage - 10);
            }}>. . .</div>}
            {props.pagination.pagesOnPagination.map(page =>
                <div className={props.pagination.currentPage === page ? styles.currentPage : 'notCurrentPage'}
                     onClick={() => {
                         props.setCurrentPage(page);
                         props.onPageChanged(page);

                     }} key={page}>{page}
                </div>)}
            {(props.pagination.shiftUp) && <div onClick={() => {
                props.setCurrentPage(props.pagination.currentPage + 10);
                props.onPageChanged(props.pagination.currentPage + 10);
            }}>. . .</div>}
        </div>

        {props.users.map(u =>
            <div className={styles.user} key={u.id}>
                <div>
                    "id={u.id}", {u.followed ? "подписан" : "НЕТ"}
                </div>
                {/*<div>*/}
                    <NavLink to={`/Profile/${u.id}`}>
                        <img className={styles.img}
                             src={u.photos.small == null ? "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" : u.photos.small}
                             alt=""/>
                    </NavLink>
                {/*</div>*/}
                <div>
                    {u.name}
                </div>

                <div>
                    {u.status}
                </div>
                {u.followed
                    ? <button disabled={props.followingInProcess.includes(u.id)}
                              onClick={() => props.unfollowThunkCreator(u.id)}
                              className={styles.button}>Unfollow
                    </button>

                    : <button disabled={props.followingInProcess.includes(u.id)}
                              onClick={() => props.followThunkCreator(u.id)}
                              className={styles.button}>Follow
                    </button>
                }
            </div>)}
    </div>
})

export default Users;
