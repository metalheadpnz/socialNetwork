import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, getUsersStatusThunk, updateUserStatusThunk} from "../../../../redux/ProfileReducer";
import Preloader from "../../../common/Preloader";
import {withRouter} from "react-router-dom";

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('login/');
            }
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUsersStatusThunk(userId)
    }


    render() {
        return (<div>
                {(!this.props.profileInfo) ? <Preloader/> :
                    <ProfileInfo updateUserStatusThunk={this.props.updateUserStatusThunk}
                                 status={this.props.status}
                                 profileInfo={this.props.profileInfo}
                                 defaultUserPic={this.props.defaultUserPic}
                                 isFetching={this.props.isFetching}
                    />}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.Profile.profileInfo,
        defaultUserPic: state.Profile.defaultUserPic,
        isFetching: state.Profile.isFetching,
        status: state.Profile.status,
        authorizedUserId: state.Auth.id,
        isAuth: state.Auth.isAuth
    }
}

let withRouterProfileInfoContainer = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUsersStatusThunk,
    updateUserStatusThunk
})(withRouterProfileInfoContainer)
