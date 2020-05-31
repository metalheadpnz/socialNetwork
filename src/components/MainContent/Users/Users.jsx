import React from "react";
import styles from "./Users.module.css";

function Users(props) {

    let users = props.users.map(u =>
        <div className={styles.user} key={u.id}>
            <div className={styles.location}>
                {u.location.country}, {u.location.city}
            </div>
            <div>
                <img className={styles.img} src={u.photoUrl} alt=""/>
            </div>
            <div>
                {u.name.firstName} {u.name.lastName}
            </div>

            <div>
                {u.status}
            </div>
            {u.follow
                ? <button onClick={() => props.unfollow(u.id)} >Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>
            }
        </div>)

    return (
        <div>
            {users}
        </div>
    )
}

export default Users;
