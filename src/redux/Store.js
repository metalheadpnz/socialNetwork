import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    Profile: ProfileReducer,
    SideBar: SideBarReducer,
    UsersPage: UsersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;