const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_PAGES = 'CHANGE_PAGES';

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPageCount: 12,
    currentPage: 1,
    pages: []

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
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount
            }

        case CHANGE_PAGES:
            // отвечает за количество отображаемых страниц

            let arr = [];

            if (state.currentPage < 6) {
                for (let i = 1; i <= 10; i++) {
                    arr.push(i);
                }
            } else {

                for (let i = (state.currentPage) - 5; i <= (state.currentPage) + 5; i++) {
                   if ((arr[arr.length-1])>=(Math.ceil(state.totalUsersCount / state.usersOnPageCount))) {
                       break;
                   }
                    arr.push(i);

                }

            }

            return {
                ...state,
                pages: [...arr]
            }

        case SET_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.currentPage
            }

        default:
            return (state);
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const changePagesAC = () => ({type: CHANGE_PAGES})


export default UsersReducer;
