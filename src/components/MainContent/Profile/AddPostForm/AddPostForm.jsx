import React from "react";
import s from "./AddPostForm.module.css";


function AddPostForm(props) {

    let AddPost = () => {
        props.AddPostFormData.addPost();
    }

    let newPostText = React.createRef();

    function onTextAreaChange() {
        props.AddPostFormData.addTextAreaChangeToState(newPostText.current.value)
    }

    return (
        <div className={s.AddPostForm}>
            <div>
                <textarea value={props.AddPostFormData.textareaData} onChange={onTextAreaChange} ref={newPostText} type="text"/>
            </div>
            <div>
                <button onClick={AddPost}>Add</button>
            </div>
        </div>
    )
}

export default AddPostForm;

