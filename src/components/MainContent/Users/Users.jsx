import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

let Users = (props) => {
    return <div>
        <div className={styles.pagination}>
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
                <div>
                    <NavLink to={`/Profile/${u.id}`}>
                        <img className={styles.img}
                             src={u.photos.small == null ? "https://lh3.googleusercontent.com/hGZFkUDTRPrnUJM8xhN8tk23gPQqFHWreNlLFK0aksEMUe8Y5Z8Jl01Nl2q6sWo4ji-CdQ=s92" : u.photos.small}
                             alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.name}
                </div>

                <div>
                    {u.status}
                </div>
                {u.followed
                    ? <button disabled={props.followingInProcess.includes(u.id)} onClick={

                        () => {
                            props.toggleFollowingProcess(true, u.id);
                            // console.log(props.followingInProcess.includes(u.id));
                            usersAPI.unfollow(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProcess(false, u.id);
                                })
                        }
                    }
                              className={styles.button}>Unfollow
                    </button>


                    : <button disabled={props.followingInProcess.includes(u.id)} onClick={

                        () => {
                            props.toggleFollowingProcess(true, u.id);

                            usersAPI.follow(u.id)
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null,
                                // {withCredentials: true, headers: {'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'}})
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProcess(false, u.id);
                                })

                        }
                    }
                              className={styles.button}>
                        Follow
                    </button>
                }
            </div>)}
    </div>

}

export default Users;
