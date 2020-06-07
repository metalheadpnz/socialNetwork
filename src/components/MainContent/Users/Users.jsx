import React from "react";
import styles from "./Users.module.css";
import defaultUserPic from './../../../img/defaultUserPic.png';

let Users = (props) => {


    let pagination = (pageNumber) => {
        props.setCurrentPage(pageNumber);

        let compareArr = [];
        for (let i = 1; i < (props.pages.length - 1); i++) {
            compareArr.push(props.pages[i])
        }
        if (!(compareArr.includes(pageNumber)) && pageNumber != 1) {
            props.changePages();
        }

        props.onPageChanged (pageNumber);

    }

    return <div>

        <div className={styles.pagination}>
            {(props.pages[0] > 1) && '...'}
            {props.pages.map(pageNumber => <div
                className={props.currentPage === pageNumber ? styles.currentPage : 'notCurrentPage'}
                onClick={() => pagination(pageNumber)} key={pageNumber}>{pageNumber}</div>)}
            {(props.pages[props.pages.length - 1]) < (Math.ceil(props.totalUsersCount / props.usersOnPageCount)) && '...'}
        </div>

        {props.users.map(u =>
            <div className={styles.user} key={u.id}>
                <div className={styles.location}>
                    "location.country", "location.city"
                </div>
                <div>
                    <img className={styles.img}
                         src={u.photos.small == null ? defaultUserPic : u.photos.small}
                         alt=""/>
                </div>
                <div>
                    {u.name}
                </div>

                <div>
                    {u.status}
                </div>
                {u.followed
                    ? <button onClick={() => props.unfollow(u.id)} className={styles.button}>Unfollow</button>
                    : <button onClick={() => props.follow(u.id)} className={styles.button}>Follow</button>
                }
            </div>)}
    </div>

}

export default Users;
