
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/DialogsReducer";
import SendMessageForm from "./SendMessageForm";
import {connect} from "react-redux";


// let SendMessageFormContainer1 = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState();
//                     let updateNewMessage = (body) => {
//                         store.dispatch(updateNewMessageActionCreator(body));
//                     }
//
//                     let addNewMessage = () => {
//                         store.dispatch(addNewMessageActionCreator());
//                     }
//                     return (
//                         <SendMessageForm newMessageText={state.DialogsPage.SendMessageFormData.newMessageText}
//                                          updateNewMessage={updateNewMessage}
//                                          addNewMessage={addNewMessage}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {newMessageText: state.DialogsPage.newMessageText}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => dispatch(addNewMessageActionCreator()),
        updateNewMessage: (body) => dispatch(updateNewMessageActionCreator(body))
    }
}

let SendMessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);


export default SendMessageFormContainer;