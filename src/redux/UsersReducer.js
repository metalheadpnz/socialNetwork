const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_PAGES = 'CHANGE_PAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPageCount: 15,
    currentPage: 1,
    pages: [],
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
                    if ((arr[arr.length - 1]) >= (Math.ceil(state.totalUsersCount / state.usersOnPageCount))) {
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
export const changePages = () => ({type: CHANGE_PAGES});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId})


export default UsersReducer;
