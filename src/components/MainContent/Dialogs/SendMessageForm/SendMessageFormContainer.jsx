import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/DialogsReducer";
import SendMessageForm from "./SendMessageForm";
import StoreContext from "../../../../StoreContext";


let SendMessageFormContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();
                    let updateNewMessage = (body) => {
                        store.dispatch(updateNewMessageActionCreator(body));
                    }

                    let addNewMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    }
                    return (
                        <SendMessageForm newMessageText={state.Dialogs.SendMessageFormData.newMessageText}
                                         updateNewMessage={updateNewMessage}
                                         addNewMessage={addNewMessage}/>)
                }
            }
        </StoreContext.Consumer>
    );
}


export default SendMessageFormContainer;