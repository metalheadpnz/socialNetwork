const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_PAGES = 'CHANGE_PAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    pagination: {
        totalUsersCount: null,
        usersOnPageCount: 15,
        currentPage: 1,
        pagesOnPagination: [],
        totalPagesCount: 1,
        shiftUp: false,
        shiftDown: false
    },
    isFetching: true,
    followingInProcess: []

}

const UsersReducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            let totalPages = Math.ceil(action.totalUsersCount / state.pagination.usersOnPageCount)
            return {
                ...state,
                users: [...action.users],
                pagination: {
                    ...state.pagination,
                    totalUsersCount: action.totalUsersCount,
                    totalPagesCount: totalPages
                }
            }

        case CHANGE_PAGES:
            if (action.shift === "+10") {
                state.pagination.currentPage = ((Math.floor(state.pagination.currentPage / 10) + 1) * 10) + 1;
            }
            if (action.shift === "-10") {
                state.pagination.currentPage = ((Math.floor(state.pagination.currentPage / 10) - 1) * 10) + 1;
            }
            let shiftUp = true;
            let shiftDown = (state.pagination.currentPage < 10 ? false : true);

            let arr = [];
            for (let i = state.pagination.currentPage; i < ((state.pagination.currentPage) + 10); i++) {

                if (i > state.pagination.totalPagesCount) {
                    shiftUp = false;
                    break
                }
                arr.push(i);
            }

            return {
                ...state,
                pagination: {...state.pagination, pagesOnPagination: [...arr], shiftUp: shiftUp, shiftDown: shiftDown}
            }


        case SET_CURRENT_PAGE:

            return {
                ...state,
                pagination: {...state.pagination, currentPage: action.currentPage}
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING_PROCESS:

            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId] //добавляем в массив ID нажатого юзера
                    : state.followingInProcess.filter(id => id !== action.userId) //выкидываем из массива отжатого:-) юзера
            }


        default:
            return (state);
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const changePages = (shift) => ({type: CHANGE_PAGES, shift});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId})


export default UsersReducer;
