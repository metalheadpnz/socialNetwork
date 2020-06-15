import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../../../redux/ProfileReducer";
import Preloader from "../../../common/Preloader";
import {withRouter} from "react-router-dom";

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return (<div>
                {(!this.props.profileInfo) ? <Preloader/> :
                    <ProfileInfo profileInfo={this.props.profileInfo} defaultUserPic={this.props.defaultUserPic}/>}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.Profile.profileInfo,
        defaultUserPic: state.Profile.defaultUserPic
    }
}

let withRouterProfileInfoContainer = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, {getUserProfileThunkCreator})(withRouterProfileInfoContainer)
