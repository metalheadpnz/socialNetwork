import React from "react";
import {addPostActionCreator, updateTextareaDataActionCreator} from "../../../../redux/ProfileReducer";
import AddPostForm from "./AddPostForm";


function AddPostFormContainer(props) {

    let state = props.store.getState();

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    function onTextAreaChange(body) {
        props.store.dispatch(updateTextareaDataActionCreator(body));
    }

    return (
        <AddPostForm textareaData={state.Profile.AddPostFormData.textareaData}
                     updateTextareaData={onTextAreaChange} AddPost={AddPost}/>
    )

}

export default AddPostFormContainer;

