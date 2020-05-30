
import {addPostActionCreator, updateTextareaDataActionCreator} from "../../../../redux/ProfileReducer";
import AddPostForm from "./AddPostForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {newPostText: state.Profile.newPostText}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextareaData: (body) => dispatch(updateTextareaDataActionCreator(body)),
        AddPost: () => dispatch(addPostActionCreator())
    }
}

let AddPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm);

export default AddPostFormContainer;

