import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    Profile: ProfileReducer,
    SideBar: SideBarReducer,
    UsersPage: UsersReducer,
    AuthReducer: AuthReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;