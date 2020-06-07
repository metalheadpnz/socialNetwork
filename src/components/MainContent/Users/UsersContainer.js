import {connect} from "react-redux";
import Users from "./Users";
import {changePagesAC, followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../../redux/UsersReducer";


let mapStateToProps = (state) => {

    return {
        users: state.UsersPage.users,
        totalUsersCount:state.UsersPage.totalUsersCount,
        usersOnPageCount:state.UsersPage.usersOnPageCount,
        currentPage: state.UsersPage.currentPage,
        pages: state.UsersPage.pages

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users, totalUsersCount) => dispatch(setUsersAC(users, totalUsersCount)),
        setCurrentPage: (currentPage)=> dispatch(setCurrentPageAC(currentPage)),
        changePages: () => dispatch(changePagesAC())

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;