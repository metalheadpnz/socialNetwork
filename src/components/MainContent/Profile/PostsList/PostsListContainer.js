import React from "react";
import {connect} from "react-redux";
import PostsList from "./PostsList";

let mapStateToProps = (state) => {

    return {
        postItemData: state.Profile.postItemData
    }
}

let PostsListContainer = connect(mapStateToProps)(PostsList);

export default PostsListContainer;