import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {changePages, follow, setCurrentPage, setUsers, toggleIsFetching, unfollow} from "../../../redux/UsersReducer";
import Preloader from "../../common/Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.usersOnPageCount, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items, data.totalCount);
                this.props.toggleIsFetching(false);
            });
        this.props.changePages();//пагинация

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.usersOnPageCount, pageNumber)
            .then(data => {
                this.props.setUsers(data.items, data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
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
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        totalUsersCount: state.UsersPage.totalUsersCount,
        usersOnPageCount: state.UsersPage.usersOnPageCount,
        currentPage: state.UsersPage.currentPage,
        pages: state.UsersPage.pages,
        isFetching: state.UsersPage.isFetching

    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    changePages,
    toggleIsFetching
})(UsersContainer);