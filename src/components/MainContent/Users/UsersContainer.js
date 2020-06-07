import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {changePages, follow, setCurrentPage, setUsers, unfollow} from "../../../redux/UsersReducer";
import * as axios from "axios";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
        this.props.changePages();
    }

    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      usersOnPageCount={this.props.usersOnPageCount}
                      currentPage={this.props.currentPage}
                      pages={this.props.pages}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
                      setCurrentPage={this.props.setCurrentPage}
                      changePages={this.props.changePages}

        />
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.UsersPage.users,
        totalUsersCount: state.UsersPage.totalUsersCount,
        usersOnPageCount: state.UsersPage.usersOnPageCount,
        currentPage: state.UsersPage.currentPage,
        pages: state.UsersPage.pages

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    changePages
})(UsersContainer);