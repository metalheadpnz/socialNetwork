import s from "./AddPostForm.module.css";
import React from "react";

function AddPostForm() {
    return (
        <div className={s.AddPostForm}>

            <form action="" className={s.form}>
                <div>
                    <textarea type="text"/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;

