import {connect} from "react-redux";
import Profile from "./Profile";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Profile)

export default connect(null, {})(AuthRedirectComponent);