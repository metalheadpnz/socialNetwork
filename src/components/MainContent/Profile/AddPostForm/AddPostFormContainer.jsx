import {addPostActionCreator} from "../../../../redux/ProfileReducer";
import AddPostForm from "./AddPostForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {newPostText: state.Profile.newPostText}
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateTextareaData: (body) => dispatch(updateTextareaDataActionCreator(body)),
        AddPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
    }
}

let AddPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm);

export default AddPostFormContainer;

