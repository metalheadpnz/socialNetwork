import React from "react";
import s from "./AddPostForm.module.css";
import {Field, reduxForm} from "redux-form";


// function AddPostForm(props) {
//
//     let AddPost = () => {
//         props.AddPost();
//     }
//
//     function updateTextareaData(event) {
//         props.updateTextareaData(event.target.value);
//     }
//
//     return (
//         <div className={s.AddPostForm}>
//             <div>
//                 <textarea value={props.newPostText} onChange={updateTextareaData}
//                           type="text"/>
//             </div>
//             <div>
//                 <button onClick={AddPost}>Add</button>
//             </div>
//         </div>
//     )
// }



const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} action="" className={s.AddPostForm}>
            <div>
                <Field component="textarea" name="inputNewPostText"/>
                {/*<textarea value={props.newPostText} onChange={updateTextareaData} type="text"/>*/}
            </div>
            <div>
                <button>Add</button>
                {/*<button onClick={AddPost}>Add</button>*/}
            </div>
        </form>
    )
}
const ReduxAddPostForm = reduxForm({form: 'AddPostForm'})(AddPostForm)

const ReduxAddPostFormContainer = (props) => {
    let AddPost = (val) => {
        // console.log(val.inputNewPostText);
        props.AddPost(val.inputNewPostText)
    }
    return (
        <ReduxAddPostForm onSubmit={AddPost} />
    )
}




export default ReduxAddPostFormContainer;

