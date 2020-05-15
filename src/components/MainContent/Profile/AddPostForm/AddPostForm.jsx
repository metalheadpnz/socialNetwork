import React from "react";
import s from "./AddPostForm.module.css";


function AddPostForm(props) {


    let AddPost = () => {
        props.AddPostFormData(newPostText.current.value);
        newPostText.current.value = '';
    }
    let newPostText = React.createRef();

    return (
        <div className={s.AddPostForm}>

            <div className={s.form}>
                <div>
                    <textarea ref={newPostText} type="text"/>
                </div>
                <div>
                    <button onClick={AddPost}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddPostForm;

