// export const getUsers = (state) => {
//         return state.UsersPage.users.filter (f => true)
//         // return state.UsersPage.users
// }

import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.UsersPage.users
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    })

export const getPagination = (state) => {
    return state.UsersPage.pagination
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.UsersPage.followingInProcess
}

