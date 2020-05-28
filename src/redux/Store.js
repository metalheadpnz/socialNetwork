import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";

let reducers = combineReducers({
    Dialogs: DialogsReducer,
    Profile: ProfileReducer,
    SideBar: SideBarReducer
})

let store = createStore(reducers);

window.store = store;

export default store;