import React from "react";
import s from "./AddPostForm.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilities/validators/validators";
import {Textarea} from "../../../common/formControls/formControls";

let maxLength5 = maxLengthCreator(5);
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
    // let maxLength5 = maxLengthCreator(5);
    // console.log(maxLength5)
    return (
        <form onSubmit={props.handleSubmit} action="" className={s.AddPostForm}>
            <div>
                <Field component={Textarea} name="inputNewPostText" validate={[required,maxLength5]} />
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
       console.log(val.inputNewPostText);
        props.AddPost(val.inputNewPostText)
    }
    return (
        <ReduxAddPostForm onSubmit={AddPost} />
    )
}




export default ReduxAddPostFormContainer;

