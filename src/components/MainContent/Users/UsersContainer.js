import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    unfollowThunkCreator
} from "../../../redux/UsersReducer";
import Preloader from "../../common/Preloader";

import {compose} from "redux";
import {getFollowingInProcess, getIsFetching, getPagination, getUsers} from "../../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pagination.usersOnPageCount, this.props.pagination.currentPage)
    }

    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(this.props.pagination.usersOnPageCount, page)
    }

    render() {
        // console.log('RENDER');
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   pagination={this.props.pagination}
                   onPageChanged={this.onPageChanged}
                   setCurrentPage={this.props.setCurrentPage}
                   followingInProcess={this.props.followingInProcess}//кнопка дизейблится
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.UsersPage.users,
//         pagination: state.UsersPage.pagination,
//         isFetching: state.UsersPage.isFetching,
//         followingInProcess: state.UsersPage.followingInProcess
//
//     }
// }


let mapStateToProps = (state) => {
    // console.log('mstp');
    return {
        users: getUsers(state),
        pagination: getPagination(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
}))(UsersContainer)