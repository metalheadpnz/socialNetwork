import React from "react";
import {connect} from "react-redux";
import PostsList from "./PostsList";

let mapStateToProps = (state) => {

    return {
        PostsListData: state.Profile.PostsListData
    }
}

let PostsListContainer = connect (mapStateToProps)(PostsList);

export default PostsListContainer;