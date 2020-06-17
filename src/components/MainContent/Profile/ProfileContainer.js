import {connect} from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {isAuth: state.Auth.isAuth}
}

export default connect(mapStateToProps, {})(Profile);