import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';
import defaultUserPic from './../../../img/defaultUserPic.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
        this.props.changePages();
    }

    onPageChanged = (pageNumber) => {


        {
            this.props.setCurrentPage(pageNumber);
            let compareArr = [];
            for (let i = 1; i < (this.props.pages.length - 1); i++) {
                compareArr.push(this.props.pages[i])
            }
            if (!(compareArr.includes(pageNumber)) && pageNumber != 1) {
                this.props.changePages();
            }
        } //пагинация

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            });

    }

    render() {


        return <div>

            <div className={styles.pagination}>
                {(this.props.pages[0] > 1) && '...'}
                {this.props.pages.map(pageNumber => <div
                    className={this.props.currentPage === pageNumber ? styles.currentPage : 'notCurrentPage'}
                    onClick={() => this.onPageChanged(pageNumber)} key={pageNumber}>{pageNumber}</div>)}
                {(this.props.pages[this.props.pages.length - 1]) < (Math.ceil(this.props.totalUsersCount / this.props.usersOnPageCount)) && '...'}
            </div>

            {this.props.users.map(u =>
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
                        ? <button onClick={() => this.props.unfollow(u.id)} className={styles.button}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)} className={styles.button}>Follow</button>
                    }
                </div>)}
        </div>
    }
}

export default Users;
