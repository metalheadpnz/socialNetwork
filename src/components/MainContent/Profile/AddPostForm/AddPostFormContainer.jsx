import React from "react";
import {addPostActionCreator, updateTextareaDataActionCreator} from "../../../../redux/ProfileReducer";
import AddPostForm from "./AddPostForm";
import {connect} from "react-redux";


// function AddPostFormContainer1(props) {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let AddPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     function onTextAreaChange(body) {
//                         store.dispatch(updateTextareaDataActionCreator(body));
//                     }
//
//                     return <AddPostForm
//                         textareaData={state.Profile.AddPostFormData.textareaData}
//                         updateTextareaData={onTextAreaChange}
//                         AddPost={AddPost}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

let mapStateToProps = (state) => {
    return {textareaData: state.Profile.AddPostFormData.textareaData}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextareaData: (body) => dispatch(updateTextareaDataActionCreator(body)),
        AddPost: () => dispatch(addPostActionCreator())
    }
}

let AddPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm);

export default AddPostFormContainer;

