export const getUsers = (state) => {
    return state.UsersPage.users
}

export const getPagination = (state) => {
    return state.UsersPage.pagination
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.UsersPage.followingInProcess
}

