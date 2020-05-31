import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    Dialogs: DialogsReducer,
    Profile: ProfileReducer,
    SideBar: SideBarReducer,
    Users: UsersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;