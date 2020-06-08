import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import * as axios from "axios";
import {SetProfileInfo} from "../../../../redux/ProfileReducer";
import Preloader from "../../../common/Preloader";


class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.setUsers(response.data.items, response.data.totalCount);
                // this.props.toggleIsFetching(false);
                this.props.SetProfileInfo(response.data);
            });
    }

    render() {
        return (<div>
                {(!this.props.profileInfo) ? <Preloader/> : <ProfileInfo profileInfo={this.props.profileInfo}/>}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.Profile.profileInfo
    }
}

export default connect(mapStateToProps, {SetProfileInfo})(ProfileInfoContainer)
