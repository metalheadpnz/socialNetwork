import React from "react";
import {addPostActionCreator, updateTextareaDataActionCreator} from "../../../../redux/ProfileReducer";
import AddPostForm from "./AddPostForm";
import StoreContext from "../../../../StoreContext";

function AddPostFormContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let AddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    function onTextAreaChange(body) {
                        store.dispatch(updateTextareaDataActionCreator(body));
                    }

                    return <AddPostForm
                        textareaData={state.Profile.AddPostFormData.textareaData}
                        updateTextareaData={onTextAreaChange}
                        AddPost={AddPost}/>
                }
            }
        </StoreContext.Consumer>
    )

}

export default AddPostFormContainer;

