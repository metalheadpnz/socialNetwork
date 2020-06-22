import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    Profile: ProfileReducer,
    SideBar: SideBarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;//для того чтобы из консоли можно было обратиться к store

export default store;