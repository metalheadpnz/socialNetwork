import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changePages,
    follow, getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    toggleFollowingProcess,
    toggleIsFetching,
    unfollow
} from "../../../redux/UsersReducer";
import Preloader from "../../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pagination.usersOnPageCount, this.props.pagination.currentPage)
    }

    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(this.props.pagination.usersOnPageCount, page)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   pagination={this.props.pagination}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   setCurrentPage={this.props.setCurrentPage}
                   changePages={this.props.changePages}
                   toggleFollowingProcess={this.props.toggleFollowingProcess}
                   followingInProcess={this.props.followingInProcess}
                   followed={this.props.followed}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pagination: state.UsersPage.pagination,
        isFetching: state.UsersPage.isFetching,
        followingInProcess: state.UsersPage.followingInProcess

    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    changePages,
    toggleIsFetching,
    toggleFollowingProcess,
    getUsersThunkCreator
})(UsersContainer);