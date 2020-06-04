import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';
import defaultUserPic from './../../../img/defaultUserPic.png';

// function Users(props) {
//
//     if (props.users.length === 0) {
//
//         axios.get("https://social-network.samuraijs.com/api/1.0/users")
//             .then(response => props.setUsers(response.data.items))
//     }
//
//     let users = props.users.map(u =>
//         <div className={styles.user} key={u.id}>
//             <div className={styles.location}>
//                 "location.country", "location.city"
//             </div>
//             <div>
//                 <img className={styles.img}
//                      src={u.photos.small == null ? defaultUserPic : u.photos.small}
//                      alt=""/>
//             </div>
//             <div>
//                 {u.name}
//             </div>
//
//             <div>
//                 {u.status}
//             </div>
//             {u.followed
//                 ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
//                 : <button onClick={() => props.follow(u.id)}>Follow</button>
//             }
//         </div>)
//
//     return (
//         <div>
//             {users}
//         </div>
//     )
// }

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return this.props.users.map(u =>
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
                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                }
            </div>)
    }
}

export default Users;
