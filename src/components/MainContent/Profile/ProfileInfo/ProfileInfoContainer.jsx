import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {SetProfileInfo} from "../../../../redux/ProfileReducer";
import Preloader from "../../../common/Preloader";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../../../api/api";


class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getUserProfile(userId)
            .then(data => {

                this.props.SetProfileInfo(data);

            });

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

export default connect(mapStateToProps, {SetProfileInfo})(withRouterProfileInfoContainer)
