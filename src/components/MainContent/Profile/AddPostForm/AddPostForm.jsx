import s from "./AddPostForm.module.css";
import React from "react";

function AddPostForm(props) {

    let Add = (param) => alert(param);
    let val = React.createRef();

    return (
        <div className={s.AddPostForm}>

            <form action="" className={s.form}>
                <div>
                    <textarea ref={val} type="text"/>
                </div>
                <div>
                    <button onClick={() => Add(val.current.value)}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;

