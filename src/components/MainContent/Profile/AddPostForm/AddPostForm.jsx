import React from "react";
import s from "./AddPostForm.module.css";


function AddPostForm(props) {

    let AddPost = () => {
        props.AddPost();
    }


    function updateTextareaData(event) {
        props.updateTextareaData(event.target.value);
    }

    return (
        <div className={s.AddPostForm}>
            <div>
                <textarea value={props.textareaData} onChange={updateTextareaData}
                          type="text"/>
            </div>
            <div>
                <button onClick={AddPost}>Add</button>
            </div>
        </div>
    )
}

export default AddPostForm;

